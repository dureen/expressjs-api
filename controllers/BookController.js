// to-do: form validation
const BookModel = require('../models/BookModel');
const respAPI = require('../resources/api/response');

exports.index = async (req, res) => {
  const data = await BookModel.findAll()
      .catch(console.error);
  respAPI.respond(res, data);
};

exports.store = async (req, res) => {
  if (!req.body.name) {
    return respAPI.failForbidden(res, 'name field is required.');
  }
  if (!req.body.price) {
    return respAPI.failForbidden(res, 'price field is required.');
  }

  const data = await BookModel.create({
    name: req.body.name,
    price: req.body.price,
  }).catch(console.error);
  if (!data) {
    respAPI.fail(res, 'Unable to create a data.');
  } else {
    respAPI.respondCreated(res, data);
  }
};

exports.show = async (req, res) => {
  const bookId = req.params.bookId;
  const book = await BookModel.findByPk(bookId)
      .catch(console.error);
  if (!book) {
    respAPI.failNotFound(res);
  } else {
    respAPI.respond(res, book);
  }
};

exports.update = async (req, res) => {
  const bookId = req.params.bookId;
  const book = await BookModel.findByPk(bookId)
      .catch(console.error);
  if (!book) {
    respAPI.failNotFound(res);
  } else {
    book.set({
      name: req.body.name || book.name,
      price: req.body.price || book.price,
    });

    const data = await book.save();
    if (!data) {
      respAPI.fail(res, 'Unable to update a data');
    } else {
      respAPI.respond(res, data, `Updated. ID: ${bookId}`);
    }
  }
};

exports.destroy = async (req, res) => {
  const bookId = req.params.bookId;
  const book = await BookModel.findByPk(bookId)
      .catch(console.error);
  if (!book) {
    respAPI.failNotFound(res);
  } else {
    const data = await book.destroy();
    if (!data) {
      respAPI.fail(res, 'Unable to delete a data');
    } else {
      respAPI.respondDeleted(res, data, `Deleted. ID: ${bookId}`);
    }
  }
};
