const env = require('../config/env');

const ErrorHandler = (err, req, res, next) => {
  console.log('Middleware Error Hadnling');
  const statusCode = err.statusCode || 500;
  const errMessage = err.message || 'Something went wrong';
  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: errMessage,
    stack: env.appEnv === 'development' ? err.stack : {},
  });
};

module.exports = ErrorHandler;
