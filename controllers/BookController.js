const BookModel = require('../models/BookModel');

exports.index = async (req, res) => {
  const data = await BookModel.findAll().catch(console.error);
  if (!data) {
    // code
  } else {
    // code
  }
  const jsonString = JSON.stringify(data, null, 2);
  res.json(JSON.parse(jsonString));
};

exports.store = async (req, res) => {
  res.send('/POST book data');
};

exports.show = async (req, res) => {
  const data = await BookModel.findByPk(req.params.bookId)
      .catch(console.error);
  if (!data) {
    // code
  } else {
    // code
  }
  const jsonString = JSON.stringify(data, null, 2);
  return res.json(JSON.parse(jsonString));
};

exports.update = async (req, res) => {
  const data = await BookModel.findByPk(req.params.bookId)
      .catch(console.error);
  if (!data) {
    // code
  } else {
    // code
  }
  res.send('/PUT book id: ' + req.params.bookId);
};

exports.destroy = async (req, res) => {
  const data = await BookModel.findByPk(req.params.bookId)
      .catch(console.error);
  if (!data) {
    // code
  } else {
    // code
  }
  res.send('/DELETE book id: ' + req.params.bookId);
};
