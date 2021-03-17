const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
//const passport = require('passport');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const MongoClientStub = require('../DAL/index')();

module.exports = function () {
  let app = express();
  let create;
  let start;

  create = function (config, db) {
    app.set('port',  3000);
    app.set('hostname',  'localhost');
    app.get('/', function (req, res) {
      res.send('Hello World!')
    })
    app.get('/testRun', function (req, res) {
      MongoClientStub.run().then(movie=>res.send(movie)).catch(console.dir);
    })
  };

  start = function () {
    let hostname = app.get('hostname'),
      port = app.get('port');

    app.listen(port, function () {
      console.log('Express server listening on - http://' + hostname + ':' + port);
    });
  };

  return {
    create: create,
    start: start
  };
};