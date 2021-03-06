const errors = require('../errors');
const logger = require('../logger');

const DEFAULT_STATUS_CODE = 500;

const statusCodes = {
  [errors.NOT_FOUND_ERROR]: 404,
  [errors.VALIDATION_ERROR]: 422,
  [errors.DATABASE_ERROR]: 503,
  [errors.DEFAULT_ERROR]: 500,
};

exports.handle = (error, _, res, next) => {
  if (error.internalCode) {
    res.status(statusCodes[error.internalCode] || DEFAULT_STATUS_CODE);
  } else {
    next(error);
    res.status(DEFAULT_STATUS_CODE);
  }
  logger.error(error);
  return res.send({ message: error.message, internal_code: error.internalCode });
};
