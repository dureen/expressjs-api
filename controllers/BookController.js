const BookModel = require('../models/BookModel');

exports.index = async (req, res) => {
  const data = await BookModel.findAll();
  res.json(resourceJson(data));
};

exports.store = async (req, res) => {
  res.send('/POST book data');
};

exports.show = async (req, res) => {
  const data = await BookModel.findByPk(req.params.bookId);
  res.json(resourceJson(data));
};

exports.update = async (req, res) => {
  const data = await BookModel.findByPk(req.params.bookId);
  // res.send('/PUT book id: ' + req.params.bookId);
  res.json(resourceJson(data));
};

exports.destroy = async (req, res) => {
  const data = await BookModel.findByPk(req.params.bookId);
  // res.send('/DELETE book id: ' + req.params.bookId);
  res.json(resourceJson(data));
};
