'use strict';

const express = require('express');
const app = express();

require('dotenv').config();

const db = require('./configs/db');
const route = require('./routes/route');

// eslint-disable-next-line no-process-env
const port = process.env.PORT || 3030;
// eslint-disable-next-line no-process-env
const host = process.env.HOST || '0.0.0.0'; 

// eslint-disable-next-line no-process-env
db(process.env.DB);

app.use(express.json());

app.use('/', route);

app.listen(port, host, () => {
    console.log(`Servidor en localhost:${port}`);
});

