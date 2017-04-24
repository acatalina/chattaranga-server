if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';

const express = require('express');
const config = require('./config');

const app = express();
const PORT = config.PORT[process.env.NODE_ENV] || process.env.PORT;

app.use('/*', function (req, res) {
  res.status(404).send({ reason: 'ROUTE NOT FOUND' });
});

app.listen(PORT, function (error) {
  if (error) {
    console.log(error);
    process.exit();
  }
  console.log(`listening on port ${PORT}`);
});