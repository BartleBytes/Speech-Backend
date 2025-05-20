const express = require('express');
const router = express.Router();
const { handleRegistration } = require('../controllers/register');

router.post('/', handleRegistration);

module.exports = router;
