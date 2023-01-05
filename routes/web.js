// eslint-disable-next-line new-cap
const router = require('express').Router();

router.get('/', (req, res) => {
  // res.render('api/index', {
  //   title: 'Home',
  // });
  res.render('index', {
    title: 'Home',
  });
});

module.exports = router;
