const resCode = require('../data/resources/resCode');

const router404 = (req, res, next) => {
  resCode.set404(res, 'Router is not found!');
};

module.exports = router404;
