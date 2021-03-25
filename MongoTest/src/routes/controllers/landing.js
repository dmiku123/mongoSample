var express = require('express');
const router = express.Router();

/// GET : //http://localhost:3000/landing/  
router.get('/', function(req, res, next) {
    //Enabled when templeting is integrated
  //res.render('index', { title: 'Express' });
  res.send('Welcome to the API Test , You are in the landing page ');
});

/// GET : //http://localhost:3000/landing/subTest
router.get('/subTest', function(req, res, next) {
  //Enabled when templeting is integrated
//res.render('index', { title: 'Express' });
res.send('You are in the sub route of the landing page');
});

module.exports = router;
