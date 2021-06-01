const Ajv = require('ajv');
const errors = require('../errors');

const ajv = new Ajv({ useDefaults: true });

const baseSchema = (schema) => ({
  type: 'object',
  required: Object.keys(schema),
  properties: {
    ...schema,
  },
});

exports.validateSchema = (schema) => (req, res, next) => {
  const valid = ajv.validate(baseSchema(schema), req);
  if (!valid) {
    return next(errors.validationError(ajv.errors));
  }
  return next();
};
