
const express = require('express');
const {registerService} = require('../../services/auth/index');

let router = express.Router();

router.post('/', registerService.registerUser);

module.exports = router;