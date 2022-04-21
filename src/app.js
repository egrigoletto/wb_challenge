const express = require('express');
const bodyParser = require('body-parser')

class AppController {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
  }

  routes() {
    this.express.use('/', require('./routes/root'));
    this.express.use('/docs', require('./routes/docs'));
    this.express.use('/customer', require('./routes/customer'));
  }
}

module.exports = new AppController().express