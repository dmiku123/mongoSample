const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
//const passport = require('passport');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//routes
const apiRouter = require('../routes/index');
const crudRouter = require('../routes/CrudRoute');

//DAL
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

    //http://localhost:3000/testMongo
    app.get('/testMongo', function (req, res) {
      MongoClientStub.run()
      .then(movie=>res.send(movie))
      .catch(console.dir);
    })

    http://localhost:3000/apiRoute
    app.use('/apiRoute', apiRouter)

    http://localhost:3000/apiRoute
    app.use('/crudRoute', crudRouter)
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