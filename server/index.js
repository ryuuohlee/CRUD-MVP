// requirements
require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT;

// middleware



// routes


// listening
app.listen(port, () => { console.log(`listening on ${port}`); })

module.exports.app = app;