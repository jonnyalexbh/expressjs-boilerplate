const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const { name } = req.query;
  res.status(200).send({ message: 'Hello World' })
});

app.all('*', (req, res) => {
  res.status(404).send({ message: `${req.url} not found`, internal_code: 'not_found_error' });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
