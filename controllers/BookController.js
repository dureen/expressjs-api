// Status: ready!
const rJson = require('../resources/json');

const BookModel = require('../models/BookModel');

exports.index = async (req, res) => {
  const books = await BookModel.findAll();
  res.json(rJson(books, 'OK'));
};

exports.store = async (req, res) => {
  if (!req.body.name) {
    return res.status(403).
        json(rJson(null, '`name` field is required', 403, 0));
  }
  if (!req.body.price) {
    return res.status(403).
        json(rJson(null, '`price` field is required', 403, 0));
  }

  const book = await BookModel.create({
    name: req.body.name,
    price: req.body.price,
  }).catch(console.error);
  if (!book) {
    res.status(422).json(rJson(null, 'Unprocessable Entity.', 422, 0));
  } else {
    res.status(201).json(rJson(book, 'Created.', 201));
  }
};

exports.show = async (req, res) => {
  const book = await BookModel.findByPk(req.params.bookId);
  if (!book) {
    res.status(404).json(rJson(null, 'Not found.', 404, 0));
  } else {
    res.json(rJson(book, 'OK'));
  }
};

exports.update = async (req, res) => {
  const book = await BookModel.findByPk(req.params.bookId);
  if (!book) {
    res.status(404).json(rJson(null, 'Not found.', 404, 0));
  } else {
    book.set({
      name: req.body.name || book.name,
      price: req.body.price || book.price,
    });
    const updated = await book.save().catch(console.error);
    if (!updated) {
      res.status(422).json(rJson(null, 'Unprocessable Entity.', 422, 0));
    } else {
      res.json(rJson(updated, 'Updated.'));
    }
  }
};

exports.destroy = async (req, res) => {
  const bookId = req.params.bookId;
  const book = await BookModel.findByPk(bookId);
  if (!book) {
    res.status(404).json(rJson(null, 'Not found.', 404, 0));
  } else {
    const x = await book.destroy().catch(console.error);
    if (!x) {
      res.status(422).json(rJson(null, 'Unprocessable Entity.', 422, 0));
    } else {
      res.json(rJson(null, 'Deleted.'));
    }
  }
};
