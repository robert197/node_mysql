const express = require('express');
const app = express();
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mydb', 'robert', 'robert', {
  host: 'mysql',
  port: 3306,
  dialect: 'mysql'
});
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
