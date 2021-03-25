
const express = require('express');
const {forgotService }= require('../../services/auth/index');

let router = express.Router();

router.post('/', forgotService.forgotPassword);

module.exports = router;