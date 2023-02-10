const resCode = require('../data/resources/resCode');

const response404 = (req, res, next) => {
  resCode.set404(res, '404 - Sorry can\'t find that!');
};

module.exports = response404;
