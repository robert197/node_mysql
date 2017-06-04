const express = require('express');

const Sequelize = require('sequelize');

const config = require('./config/config');

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
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(PORT);
console.log('Running on http://localhost:3000');
