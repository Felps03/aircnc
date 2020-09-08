const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const socketio = require('socket.io');
const http = require('http');

const routes = require('./routes');

class App {
  constructor() {
    this.app = express();
    this.server = http.Server(this.app);
    this.io = socketio(this.server);
    this.connectedUsers = {};
    this.socket();
    this.middlewares();
    this.routes();
  }

  socket() {
    this.io.on('connection', (socket) => {
      const { user_id } = socket.handshake.query;

      this.connectedUsers[user_id] = socket.id;
    });
  }

  middlewares() {
    this.app.use((req, res, next) => {
      req.io = this.io;
      req.connectedUsers = this.connectedUsers;

      return next();
    });

    this.app.use(cors());
    this.app.use(express.json());
    this.app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

    // TODO: removi moogose
    mongoose.connect('mongodb://localhost:27017/aircnc', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  routes() {
    this.app.use(routes);
  }
}

module.exports = new App().server;
