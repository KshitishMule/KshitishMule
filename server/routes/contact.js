const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { submitContact, getMessages } = require('../controllers/contactController');

const validateContact = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2, max: 100 }).withMessage('Name must be 2–100 characters')
    .escape(),
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please enter a valid email')
    .normalizeEmail(),
  body('subject')
    .optional()
    .trim()
    .isLength({ max: 200 }).withMessage('Subject too long')
    .escape(),
  body('message')
    .trim()
    .notEmpty().withMessage('Message is required')
    .isLength({ min: 10, max: 2000 }).withMessage('Message must be 10–2000 characters')
    .escape(),
];

// POST /api/contact
router.post('/', validateContact, submitContact);

// GET /api/contact (protected - add auth middleware for production)
router.get('/', getMessages);

module.exports = router;
