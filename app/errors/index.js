const internalError = (message, internalCode) => ({
  message,
  internalCode,
});

exports.DEFAULT_ERROR = 'default_error';
exports.defaultError = (message) => internalError(message, exports.DEFAULT_ERROR);

exports.NOT_FOUND_ERROR = 'not_found_error';
exports.notFoundError = (message) => internalError(message, exports.NOT_FOUND_ERROR);

exports.VALIDATION_ERROR = 'validation_error';
exports.validationError = (message) => internalError(message, exports.VALIDATION_ERROR);
