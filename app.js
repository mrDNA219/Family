const express = require('express');
const morgan = require('morgan');
const app = express();
const router = require('./api');

app.use((morgan('dev')));
app.use(express.json());

app.use('/api', router);

module.exports = app;