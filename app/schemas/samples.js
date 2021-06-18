const {
  keyNotExist,
  typeError,
} = require('../constants/error_messages');

exports.createSampleSchema = {
  firstname: {
    in: ['body'],
    exists: {
      errorMessage: keyNotExist('firstname'),
    },
    isString: {
      errorMessage: typeError({ key: 'firstname', type: 'string' }),
    },
  },
  lastname: {
    in: ['body'],
    exists: {
      errorMessage: keyNotExist('lastname'),
    },
    isString: {
      errorMessage: typeError({ key: 'firstname', type: 'string' }),
    },
  },
  age: {
    in: ['body'],
    exists: {
      errorMessage: keyNotExist('age'),
    },
    isInt: {
      options: {
        min: 0,
      },
      errorMessage: typeError({ key: 'age', type: 'positive integer' }),
    },
  },
};
