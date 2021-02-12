const { myLogger } = require('./middlewares/logger');
const { healthCheck } = require('./controllers/health_check');
const { urlsNotFound } = require('./controllers/urls');
const { getSample } = require('./controllers/samples');

exports.init = (app) => {
  app.get('/health', healthCheck);

  /*  */
  app.get('/', (req, res) => {
    res.status(200).send({ message: 'Hello World' });
  });

  /* Samples */
  app.get('/samples', myLogger, getSample);

  /* Not found middleware */
  app.all('*', urlsNotFound);
};
