var express = require('express');
var router = express.Router();

/* GET */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send('API router test successful');
});
/* /POST */
router.post('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send('API router test successful');
});
/* PUT */
router.put('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send('API router test successful');
});
/* DELETE */
router.delete('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send('API router test successful');
});

module.exports = router;
