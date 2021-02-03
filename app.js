const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/db');
const router = require('./routes/index')
const app = express(); // Set up the express app

// parse incoming request data using bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

////Set PORT and listener////
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});