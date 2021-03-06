const { myLogger } = require('./middlewares/logger');
const { healthCheck } = require('./controllers/health_check');
const { getSample, createSample } = require('./controllers/samples');
const { validateSchemaAndFail } = require('./middlewares/schema');
const { createSampleSchema } = require('./schemas/samples');

exports.init = (app) => {
  app.get('/health', healthCheck);

  /*  */
  app.get('/', (req, res) => {
    res.status(200).send({ message: 'Hello World' });
  });

  /* Samples */
  app.get('/samples', myLogger, getSample);
  app.post('/samples', validateSchemaAndFail(createSampleSchema), createSample);
};
