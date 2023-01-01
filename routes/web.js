// eslint-disable-next-line new-cap
const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = router;
