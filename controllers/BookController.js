const BookModel = require('../models/BookModel');

exports.index = async (req, res) => {
  // res.send('/GET index of books');
  const books = await BookModel.findAll().catch(console.error);
  const jsonString = JSON.stringify(books, null, 2);
  res.json(JSON.parse(jsonString));
};

exports.store = async (req, res) => {
  res.send('/POST book data');
};

exports.show = async (req, res) => {
  // res.send('/GET book id: ' + req.params.bookId);
  const book = await BookModel.findByPk(req.params.bookId)
      .catch(console.error);
  const jsonString = JSON.stringify(book, null, 2);
  return res.json(JSON.parse(jsonString));
};

exports.update = async (req, res) => {
  res.send('/PUT book id: ' + req.params.bookId);
};

exports.destroy = async (req, res) => {
  res.send('/DELETE book id: ' + req.params.bookId);
};
