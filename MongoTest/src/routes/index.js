//controllers
const landingRouter = require('./controllers/landing');
const crudRouter = require('./controllers/CrudRoute');

const apiRouter = require('./apis/index');

//Services
const MongoClientStub = require('../services/mongoMovieSample');

const init = (server) => {
  server.get('*', function (req, res, next) {
    console.log('Original Request was made to: ' + req.originalUrl);
    return next();
  });

  server.get('/', function (req, res) {
    res.redirect('/landing');
  });
  // this is calling controller directly and not supposed to be version controled and mostly static
  //http://localhost:3000/landing
  server.use('/landing', landingRouter)

  //service test and will be phased out later
  //http://localhost:3000/testMongo
  server.get('/testMongo', function (req, res) {
    MongoClientStub.run()
      .then(movie => res.send(movie))
      .catch(console.dir);
  })

  //basic path and mewthod test and will be phased out
  //http://localhost:3000/crudRoute
  server.use('/crudRoute', crudRouter)

   server.use('/api', apiRouter);
  // server.use('/error', errorRoute);
}
module.exports = {
  init: init
}