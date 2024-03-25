const express = require('express');
const { sendContactEmail } = require('../controllers/contactMeController');
const router = express.Router();

router.post('/contactMe', sendContactEmail);

module.exports = router;
