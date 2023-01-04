const resJson = require('../resources/json');

const BookModel = require('../models/BookModel');

exports.index = async (req, res) => {
  const books = await BookModel.findAll();
  res.json(resJson(books));
};

exports.store = async (req, res) => {
  res.send('/POST book data');
};

exports.show = async (req, res) => {
  const book = await BookModel.findByPk(req.params.bookId);
  if (!book) {
    res.json(resJson(null, 'Not found.', 404, 0));
  } else {
    res.json(resJson(book));
  }
};

exports.update = async (req, res) => {
  const book = await BookModel.findByPk(req.params.bookId);
  // res.send('/PUT book id: ' + req.params.bookId);
  res.json(resJson(book));
};

exports.destroy = async (req, res) => {
  const bookId = req.params.bookId;
  const book = await BookModel.findByPk(bookId);
  if (!book) {
    res.json(resJson(null, 'Not found.', 404, 0));
  } else {
    const x = await book.destroy().catch(console.error);
    if (!x) {
      const msg = 'Unable to delete book #' + bookId;
      res.json(resJson(null, msg, 500, 0));
    } else {
      const msg = 'Successfully deleted book #' + bookId;
      res.json(resJson(null, msg));
    }
  }
};
