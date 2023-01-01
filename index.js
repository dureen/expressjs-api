const express = require('express');
const env = require('./config/env');
const app = express();

/**
 * -----------------------------------------------------------------------------
 * ROUTES CONFIGURATION
 * -----------------------------------------------------------------------------
 */
const routes = require('./routes/base');
routes(app);

/**
 * -----------------------------------------------------------------------------
 * ERROR CONFIGURATION
 * How to use:
 * app.use('/books', (req, res, next) => {
 * try {
 *    // code
 * } catch (error) {
 *     next(error)
 * }
 * });
 * -----------------------------------------------------------------------------
 */
const ErrorHandler = require('./middlewares/ErrorHandler');
app.use(ErrorHandler);


app.listen(env.appPort, () => {
  console.log(`Server running at ${env.appURL}:${env.appPort}/`);
}).on('error', console.error);
