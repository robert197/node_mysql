/* eslint-disable no-new */
import express from 'express';
import winston from 'winston';
import index from './app/routes/index';
import user from './app/routes/user';

class Server {
  PORT = 3030;
  app = express();
  constructor() {
    this.start();
  }

  start() {
    this.app.use('/', index);
    this.app.use('/user', user);
    this.app.listen(this.PORT);
    winston.info(`Running on http://localhost:${this.PORT}`);
  }
}
new Server();
