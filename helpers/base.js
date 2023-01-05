const env = require('../config/env');

module.exports = {
  name: env.appName,
  url: env.appURL,
  port: env.appPort,
  environment: env.appEnv,
};

