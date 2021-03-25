const express = require('express');
const {logoutService} = require('../../services/auth/index');

let router = express.Router();

router.post('/', logoutService.logoutUser);

module.exports = router;