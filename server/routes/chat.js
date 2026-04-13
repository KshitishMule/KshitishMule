const express = require('express');
const router = express.Router();
const { chatWithAI } = require('../config/chat');

router.post('/', async (req, res) => {
  const { message, history } = req.body;

  if (!message || message.trim().length === 0) {
    return res.status(400).json({ success: false, message: 'Message is required' });
  }

  try {
    const reply = await chatWithAI(message, history || []);
    res.json({ success: true, reply });
  } catch (error) {
    console.error('❌ Chat error:', error.message);
    res.status(500).json({ success: false, message: 'AI is unavailable right now.' });
  }
});

module.exports = router;
