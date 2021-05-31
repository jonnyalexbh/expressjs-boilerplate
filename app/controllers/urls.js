const errors = require('../errors');

exports.urlsNotFound = (req, res, next) => next(errors.notFoundError(`${req.url} not found`));
