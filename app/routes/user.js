import express from 'express';
import models from '../models';

const Router = express.Router();

Router.post('/create', () => {
  models.User.sync({ force: true }).then(() => models.User.create({
    firstName: 'John',
    lastName: 'Hancock',
  }));
});

export default Router;
