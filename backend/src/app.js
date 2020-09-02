const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    // TODO: removi moogose
    mongoose.connect('mongodb://localhost:27017/aircnc', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
