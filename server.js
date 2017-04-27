if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';

const express = require('express');
const path = require('path');
const config = require('./config');
const errorHandler = require('./error/index');
const apiRouter = require('./routes/api');

const app = express();
const PORT = config.PORT[process.env.NODE_ENV] || process.env.PORT;

app.use(express.static(path.resolve(__dirname, 'public')));

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

app.use(errorHandler);