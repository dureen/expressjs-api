const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const logger = require('morgan');

const env = require('./config/base');
const routes = require('./routes/base');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.set('view engine', 'ejs');

app.use(logger('dev'));

// body-parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// cookie-parser
app.use(cookieParser());

// set public directory
app.use(express.static(path.join(__dirname, 'public')));

// routes
routes(app);

// error handler
const ErrorHandler = require('./middlewares/ErrorHandler');
app.use(ErrorHandler);

module.exports = app;
app.listen(env.appPort, () => {
  console.log(`Server running at [${env.appURL}]`);
}).on('error', console.error);
