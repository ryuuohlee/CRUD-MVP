//require
require('dotenv').config();
const Pool = require('pg').Pool;

//db connection
const pool = new Pool({
  user: process.env.POSTGRES_USER || 'jeffreylee',
  host: process.env.POSTGRES_HOST || 'localhost',
  database: process.env.POSTGRES_DATABASE || 'collection',
  password: process.env.POSTGRES_PASSWORD || '',
  port: process.env.POSTGRES_PORT || 5432
});

pool.connect()
  .then(() => { console.log('db connected'); })
  .catch(e => { console.log('error', e)});


