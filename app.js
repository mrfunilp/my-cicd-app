const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from my CI/CD app!');
});

module.exports = app;