exports.sampleCreateSchema = {
  body: {
    required: ['first_name', 'last_name', 'phone_number'],
    type: 'object',
    properties: {
      first_name: {
        type: 'string',
        minLength: 1,
      },
      last_name: {
        type: 'string',
        minLength: 1,
      },
    },
  },
};
