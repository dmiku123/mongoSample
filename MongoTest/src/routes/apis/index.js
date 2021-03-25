const express = require('express');
const v1Controller = require('./v1');

let router = express.Router();

//This gives us flexibility to run multiple api version as well 
router.use('/v1', v1Controller);

module.exports = router;