// requirements
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');
const pool = require('./database/connection.js').pool;
const cors = require('cors');

const app = express();
const port = process.env.PORT;

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static());

// routes
// get all
app.get('/api/funkoPops', (req, res) => {
  pool.query('SELECT * FROM FunkoPops', (err, data) => {
    if(err){
      return console.log('error', err);
    }
    console.log(data);
    res.status(200).json(data);
  })
})

// listening
app.listen(port, () => { console.log(`listening on ${port}`); })

module.exports = app;