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
});

app.post('/api/funkoPops', (req, res) => {
  const { id, item_name, item_number, category, item_collection, release_date, price, collection_value, where_to_buy } = req.query;
  var queryStr = 'INSERT INTO funkoPops (id, item_name, item_number, category, item_collection, release_date, price, collection_value, where_to_buy) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)';
  pool.query(queryStr, [id, item_name, item_number, category, item_collection, release_date, price, collection_value, where_to_buy], (err, results) => {
    if (err) {
      console.log('Failed to insert: ', err);
    }
    res.status(201).json(results);
  })
});

app.put('/api/funkoPops',)

// listening
app.listen(port, () => { console.log(`listening on ${port}`); })

module.exports = app;