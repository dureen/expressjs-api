const base = require('../config/base');

const errors = (err, req, res, next) => {
  console.log('Middleware Error Handling');
  const statusCode = err.statusCode || 500;
  const errMessage = err.message || 'Something went wrong';
  res.status(statusCode).json({
    code: statusCode,
    errors: {
      message: errMessage,
      stack: base.env === 'development' ? err.stack : {},
    },
  });
};

module.exports = errors;
