/**
 * -----------------------------------------------------------------------------
 * API VERSION 1
 * -----------------------------------------------------------------------------
 */

// eslint-disable-next-line new-cap
const router = require('express').Router();

// book
router.get('/books', (req, res) => {
  res.send({
    book: 'Hello World!',
  });
});

router.get('/books/:bookId', (req, res) => {
  res.send(req.params);
});

router.post('/books', (req, res) => {
  res.send('/POST');
});

router.put('/books/:bookId', (req, res) => {
  res.send('/PUT ' + req.params.bookId);
});

router.delete('/books/:bookId', (req, res) => {
  res.send('/delete ' + req.params.bookId);
});


// Post
router.get('/post', (req, res) => {
  res.send({
    book: 'Hello World!',
  });
});

router.get('/post/:postId', (req, res) => {
  res.send(req.params);
});

router.post('/post', (req, res) => {
  res.send('/POST');
});

router.put('/post/:postId', (req, res) => {
  res.send('/PUT ' + req.params.postId);
});

router.delete('/post/:postId', (req, res) => {
  res.send('/delete ' + req.params.postId);
});


// Product
router.get('/product', (req, res) => {
  res.send({
    book: 'Hello World!',
  });
});

router.get('/product/:productId', (req, res) => {
  res.send(req.params);
});

router.post('/product', (req, res) => {
  res.send('/POST');
});

router.put('/product/:productId', (req, res) => {
  res.send('/PUT ' + req.params.productId);
});

router.delete('/product/:productId', (req, res) => {
  res.send('/delete ' + req.params.productId);
});

module.exports = router;
