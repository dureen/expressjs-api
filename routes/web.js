// eslint-disable-next-line new-cap
const router = require('express').Router();

// web controller
const webController = require('../controllers/WebController');

// router.get('/', (req, res) => {
//   res.render('api/index', {
//     title: 'Home',
//   });
// });

router.get('/', webController.index);
router.get('/api', webController.api);
router.get('/supports', webController.support);
router.get('/abouts', webController.about);

module.exports = router;
