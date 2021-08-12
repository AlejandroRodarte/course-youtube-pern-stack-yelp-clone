const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const routes = require('./routes');
const knex = require('./db/knex');

const app = express();

app.set('queryBuilder', knex);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', routes);

module.exports = app;
