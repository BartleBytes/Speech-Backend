const express = require('express');
const router = express.Router();
const { handleRegistration, getRegistrations } = require('../controllers/register');

// POST /api/register
router.post('/', handleRegistration);

// GET /api/register
router.get('/', getRegistrations);

module.exports = router;
