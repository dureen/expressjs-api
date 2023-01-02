/**
 * -----------------------------------------------------------------------------
 * API VERSION 1
 * -----------------------------------------------------------------------------
 */

// eslint-disable-next-line new-cap
const router = require('express').Router();

// controllers
const bookController = require('../controllers/BookController');
const postController = require('../controllers/PostController');
const productController = require('../controllers/ProductController');
const userController = require('../controllers/UserController');


// book API
router.get('/books', bookController.index);
router.post('/books', bookController.store);
router.get('/books/:bookId', bookController.show);
router.put('/books/:bookId', bookController.update);
router.delete('/books/:bookId', bookController.destroy);


// Post API
router.get('/post', postController.index);
router.post('/post', postController.store);
router.get('/post/:postId', postController.show);
router.put('/post/:postId', postController.update);
router.delete('/post/:postId', postController.destroy);


// Product API
router.get('/product', productController.index);
router.post('/product', productController.store);
router.get('/product/:productId', productController.show);
router.put('/product/:productId', productController.update);
router.delete('/product/:productId', productController.destroy);

// User API
router.get('/user', userController.index);
router.post('/user', userController.store);
router.get('/user/:userId', userController.show);
router.put('/user/:userId', userController.update);
router.delete('/user/:userId', userController.destroy);

module.exports = router;
