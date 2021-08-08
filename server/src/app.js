const express = require('express');
const morgan = require('morgan');

const routes = require('./routes');
const db = require('./db');

const app = express();

app.set('db', db);

app.use(morgan('dev'));
app.use(express.json());
app.use('/api', routes);

module.exports = app;
