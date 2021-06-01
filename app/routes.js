const { myLogger } = require('./middlewares/logger');
const { healthCheck } = require('./controllers/health_check');
const { getSample, createSample } = require('./controllers/samples');
const { validateSchema } = require('./middlewares/ajv_schema');
const { sampleCreateSchema } = require('./schemas/samples');

exports.init = (app) => {
  app.get('/health', healthCheck);

  /*  */
  app.get('/', (req, res) => {
    res.status(200).send({ message: 'Hello World' });
  });

  /* Samples */
  app.get('/samples', myLogger, getSample);
  app.post('/samples', validateSchema(sampleCreateSchema), createSample);
};
