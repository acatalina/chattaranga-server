if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';

const express = require('express');
const config = require('./config');
const mongoose = require('mongoose');

const app = express();
const db = config.DB[process.env.NODE_ENV] || process.env.DB;
const PORT = config.PORT[process.env.NODE_ENV] || process.env.PORT;

const apiRouter = require('./routes/api');

mongoose.connect(db, (err) => {
  if (err) return console.log(`error connecting to the Database ${err}`);

  return console.log(`connected to the Database: ${db}`);
});

app.use('/api', apiRouter);

app.use('/*', (req, res) => {
  res.status(404).send({ reason: 'ROUTE NOT FOUND' });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    process.exit();
  }
  console.log(`listening on port ${PORT}`);
});