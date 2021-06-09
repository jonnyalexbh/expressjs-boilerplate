const app = require('./app');
const config = require('./config');
const logger = require('./app/logger');

const { port } = config.api;

app.listen(port, () => {
  logger.info(`Listening on port: ${port}`);
});
