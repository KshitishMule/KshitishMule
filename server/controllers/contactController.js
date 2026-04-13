const { validationResult } = require('express-validator');
const Message = require('../models/Message');
const { sendEmailNotification, sendSMSNotification } = require('../config/notifications');

exports.submitContact = async (req, res) => {
  // Validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map((e) => ({ field: e.path, message: e.msg })),
    });
  }

  const { name, email, subject, message } = req.body;
  const ipAddress = req.ip || req.connection.remoteAddress;

  try {
    // Save to DB
    const saved = await Message.create({ name, email, subject, message, ipAddress });

    // Send notifications (non-blocking)
    Promise.allSettled([
      sendEmailNotification({ name, email, subject, message }),
      sendSMSNotification({ name, email, message }),
    ]).then((results) => {
      results.forEach((r, i) => {
        if (r.status === 'rejected') console.error(`Notification ${i} failed:`, r.reason);
      });
    });

    res.status(201).json({
      success: true,
      message: "Thanks for reaching out! I'll get back to you soon.",
      data: { id: saved._id, createdAt: saved.createdAt },
    });
  } catch (error) {
    console.error('Contact submit error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again.',
    });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 }).limit(50);
    res.json({ success: true, count: messages.length, data: messages });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
