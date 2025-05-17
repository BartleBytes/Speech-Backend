const express = require('express');
const router = express.Router();
const { handleRegistration } = require('../controllers/registerController');

router.post('/', handleRegistration);

module.exports = router;
