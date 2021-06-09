require('dotenv').config();

module.exports = {
  api: {
    env: process.env.NODE_ENV,
    port: process.env.PORT || 3000,
  },
};
