if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev'; 

require('./test_seed')();