import express from 'express';

import Sequelize from 'sequelize';

import winston from 'winston';

import config from './config/config';

const sequelize = new Sequelize(
  config.mysql.name,
  config.mysql.user,
  config.mysql.password,
  config.mysql.options,
);
const app = express();
const PORT = 3030;

sequelize
  .authenticate()
  .then(() => {
    winston.info('Connection has been established successfully.');
  })
  .catch((err) => {
    winston.log('error', 'Unable to connect to the database:', err);
  });

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(PORT);
winston.info('Running on http://localhost:3000');
