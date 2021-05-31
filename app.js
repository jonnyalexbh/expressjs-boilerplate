const express = require('express');

const app = express();

const logger = require('./app/logger');
const errors = require('./app/middlewares/errors');
const routes = require('./app/routes');

routes.init(app);

app.use(errors.handle);

app.listen(3000, () => {
  logger.info('Listening on port: 3000');
});
