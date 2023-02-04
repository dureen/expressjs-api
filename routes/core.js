const api = require('./api');
const web = require('./web');

const core = (app) => {
  app.use('/', web);
  app.use('/api/v1', api);
};

module.exports = core;
