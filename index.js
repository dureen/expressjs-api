const express = require('express');
const env = require('./config/env');
const bodyParser = require('body-parser');
const app = express();


/**
 * -----------------------------------------------------------------------------
 * BODY-PARSER CONFIGURATION
 * -----------------------------------------------------------------------------
 * cONnfiguring express to use body-parser as middle-ware.
 * -----------------------------------------------------------------------------
 */
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

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
