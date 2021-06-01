const express = require('express');

const app = express();

const urlsNotFound = require('./app/errors/not_found');
const errors = require('./app/middlewares/errors');
const routes = require('./app/routes');

// Parsing of application/json, application/x-www-form-urlencoded type post data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes.init(app);

/* Urls not Found middleware */
app.use(urlsNotFound);

/* Handle errors middleware */
app.use(errors.handle);

module.exports = app;
