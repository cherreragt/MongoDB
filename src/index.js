'use strict';

const express = require('express');
const bodyParser = require("body-parser");
const app = express();

const db = require('./configs/db');
const route = require('./routes/route');

// eslint-disable-next-line no-process-env
const port = process.env.PORT || 3030;
//const host = process.env.HOST || '0.0.0.0'; 

db('mongodb://localhost:27017/test');

app.use(bodyParser.json());

app.use('/', route);

app.listen(port, () => {
    console.log(`Servidor en localhost:${port}`);
});

