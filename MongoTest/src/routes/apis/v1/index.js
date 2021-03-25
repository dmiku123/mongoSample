const express = require('express');

/// controllers
//login controllers
const registerController = require('../../controllers/login/register');
const loginController = require('../../controllers/login/login');
const logoutController = require('../../controllers/login/logout');
const forgotController = require('../../controllers/login/forgot');
//user controllers
const adminController = require('../../controllers/user/admin');
const employeeController = require('../../controllers/user/employee');

let router = express.Router();

router.use('/register', registerController);
router.use('/login', loginController);
router.use('/logout', logoutController);
router.use('/forgot', forgotController);

router.use('/admin', adminController);
router.use('/employee', employeeController);

module.exports = router;