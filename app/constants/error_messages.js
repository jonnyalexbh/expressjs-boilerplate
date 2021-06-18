exports.typeError = ({ key, type }) => `the ${key} field must be type ${type}`;
exports.keyNotExist = (key, type = 'field') => `the ${key} ${type} must exist`;
