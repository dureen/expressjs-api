require('dotenv').config();
const mongoose = require('mongoose');
const mongoString = process.env.MongoDB_URL;

/**
 * (node:8095) [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option
 * will be switched back to `false` by default in Mongoose 7. Use
 * `mongoose.set('strictQuery', false);` if you want to prepare for this change.
 * Or use `mongoose.set('strictQuery', true);` to suppress this warning.
 * (Use `node --trace-deprecation ...` to show where the warning was created)
 */
mongoose.set('strictQuery', false); // true

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database Connected');
});
