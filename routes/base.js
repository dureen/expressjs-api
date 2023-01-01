const api = require('./api');
const web = require('./web');

const base = (app) => {
  app.use('/', web);
  app.use('/api/v1', api);
};

module.exports = base;
