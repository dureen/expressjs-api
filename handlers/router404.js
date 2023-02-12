const response = require('../data/resources/respAPI');

const router404 = (req, res, next) => {
  response.failNotFound(res, 'Router is not found!');
};

module.exports = router404;
