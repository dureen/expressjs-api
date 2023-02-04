const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const logger = require('morgan');

const base = require('./config/base');
const routes = require('./routes/core');

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

// exports.serve = () => {
app.listen(base.port, () => {
  console.log(`Server running at [${base.url}]`);
}).on('error', console.error);
// };
