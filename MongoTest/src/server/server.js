const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
//const passport = require('passport');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const hostConfig  = require("../config/hostObj") ;

var Route = require("../routes/index");

module.exports = function () {
  let app = express();
  let create;
  let start;

  create = function (/*config, db*/) {
    app.set('port', hostConfig.port);
    app.set('hostname', hostConfig.hostname);

    //initialize the routes
    Route.init(app)
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