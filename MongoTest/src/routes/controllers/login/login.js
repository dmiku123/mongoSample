const express = require('express');
const {loginService} = require('../../services/auth/index');

let router = express.Router();

router.post('/', loginService.loginUser);

module.exports = router;