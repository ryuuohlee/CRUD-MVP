//require
require('dotenv').config();
const Pool = require('pg').Pool;

//db connection
const pool = new Pool({
  user: 'jeffreylee',
  host: 'localhost',
  database: 'collection',
  password: '',
  port: 5432
});

pool.connect()
  .then(() => { console.log('db connected'); })
  .catch(e => { console.log('error', e)});

module.exports = {
  pool
}
