// Status: ready!
const resJson = require('../resources/json');

const BookModel = require('../models/BookModel');

exports.index = async (req, res) => {
  const books = await BookModel.findAll();
  res.json(resJson(books));
};

exports.store = async (req, res) => {
  if (!req.body.name || !req.body.price) {
    res.json(resJson(null, 'Failed.', 400, 0));
  } else {
    const book = await BookModel.create({
      name: req.body.name,
      price: req.body.price,
    });
    if (!book) {
      res.json(resJson(null, 'Failed.', 400, 0));
    } else {
      res.json(resJson(book, 'Created.', 201));
    }
  }
};

exports.show = async (req, res) => {
  const book = await BookModel.findByPk(req.params.bookId);
  if (!book) {
    res.json(resJson(null, 'Not found.', 404, 0));
  } else {
    res.json(resJson(book));
  }
};

// in-progress, don't expect it will work
exports.update = async (req, res) => {
  const book = await BookModel.findByPk(req.params.bookId);
  if (!book) {
    res.json(resJson(null, 'Not found. Cannot update this data.', 404, 0));
  } else if (!req.body.name || !req.body.price) {
    res.json(resJson(null, 'Failed.', 400, 0));
  } else {
    // book.update
    book.set({
      name: req.body.name,
      price: req.body.price,
    });
    const updated = await book.save();
    if (!updated) {
      res.json(resJson(null, 'Failed.', 400, 0));
    } else {
      res.json(resJson(updated, 'Updated.', 200));
    }
  }
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
