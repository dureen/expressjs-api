const response = require('../resources/api/response');

const router404 = (req, res, next) => {
  response.failNotFound(res, 'Router is not found!');
};

module.exports = router404;
