exports.getSample = (req, res) => {
  res.status(200).send({ message: 'get samples' });
};

exports.createSample = (req, res) => {
  res.status(201).send(req.body);
};
