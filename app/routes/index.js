import express from 'express';
import winston from 'winston';
import models from '../models';

const Router = express.Router();

Router.get('/', (req, res) => {
  models.User.findAll()
    .then((users) => {
      res.send(users);
    })
    .catch(err => winston.error(err));
});

export default Router;
