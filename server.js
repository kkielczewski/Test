const Koa = require('koa');
const mongoose = require('mongoose');
const logger = require('koa-logger');
const cors = require('kcors');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const send = require('koa-send');
const routes = require('./routes');
const config = require('./config');
const path = require('path');

// Make mongoose use native ES6 promises
mongoose.Promise = global.Promise;

// Connect to MongoDB
mongoose.connect(config.database.url, config.database.opts);

// Koa
const app = new Koa()
  .use(cors())
  .use(logger())
  .use(bodyParser())
  .use(routes)
  .use(serve(path.join(__dirname, '/client/dist')))
  .use(function* index() {
    yield send(this, '/client/dist/index.html');
  })
  .use(function(req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
  });

const server = app.listen(config.server.port);

module.exports = server;
