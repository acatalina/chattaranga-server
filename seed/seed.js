if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev'; 

const mongoose = require('mongoose');
const DB = require('../config').DB[process.env.NODE_ENV];

mongoose.connect(DB, (err) => {
    if (err) {
      console.log(err);
      process.exit();
    }
    
    console.log('connected to db');

    require('./test_seed')();
});