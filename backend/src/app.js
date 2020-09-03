const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

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
