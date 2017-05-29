const express = require('express');
const app = express();

const PORT = 3030;

app.get('/', function (req, res) {
    res.send('Hello world');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);