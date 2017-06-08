import express from 'express';
import models from '../models';

const Router = express.Router();

Router.get('/create', (req, res) => {
  models.User.sync({ force: true })
    .then(() => models.User.create({
      firstName: 'John',
      lastName: 'Hancock',
    }))
    .then(() => res.status(200).send('done'));
});

export default Router;
