const express = require('express');
const router = express.Router();
const { handleRegistration, getRegistrations, validateRegistration } = require('../controllers/register');

// POST /api/register
router.post('/', validateRegistration, handleRegistration);

// GET /api/register
router.get('/', getRegistrations);

module.exports = router;
