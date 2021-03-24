var express = require('express');
var router = express.Router();

/* GET basic */
router.get('/', function(req, res, next) {
    //Enabled when templeting is integrated
  //res.render('index', { title: 'Express' });
  res.send('API router test successful');
});

/* GET subRoute */
router.get('/subTest', function(req, res, next) {
  //Enabled when templeting is integrated
//res.render('index', { title: 'Express' });
res.send('API sub router test successful');
});
module.exports = router;
