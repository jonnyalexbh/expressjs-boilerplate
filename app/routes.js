const { myLogger } = require('./middlewares/logger');

exports.init = app => {
  app.get('/health', (req, res) => res.send('aaaaa'));

  /*  */
  app.get('/', (req, res) => {
    const { name } = req.query;
    res.status(200).send({ message: 'Hello World' })
  });

  /* Users */
  app.get('/users', myLogger, (req, res) => {
    res.status(200).send({ message: 'Hello Users' })
  });

  /* Not found middleware */
  app.all('*', (req, res) => {
    res.status(404).send({ message: `${req.url} not found`, internal_code: 'not_found_error' });
  });
}
