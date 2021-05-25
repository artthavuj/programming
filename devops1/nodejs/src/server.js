'user strict';

const express = require('express');

const PORT = 3001;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World 111\n');
  });

app.listen(PORT, HOST);

console.log(`Running on version1 http://${HOST}:${PORT}/`);