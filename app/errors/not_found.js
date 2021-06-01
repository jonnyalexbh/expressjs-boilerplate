const errors = require('./index');

const urlsNotFound = (req, res, next) => next(errors.notFoundError(`${req.url} not found`));

module.exports = urlsNotFound;
