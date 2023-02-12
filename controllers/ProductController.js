const ProductModel = require('../models/ProductModel');
const respAPI = require('../data/resources/respAPI');

exports.index = async (req, res) => {
  const data = await ProductModel.findAll()
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

  const data = await ProductModel.create({
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
  const productId = req.params.productId;
  const product = await ProductModel.findByPk(productId)
      .catch(console.error);
  if (!product) {
    respAPI.failNotFound(res);
  } else {
    respAPI.respond(res, product);
  }
};

exports.update = async (req, res) => {
  const productId = req.params.productId;
  const product = await ProductModel.findByPk(productId)
      .catch(console.error);
  if (!product) {
    respAPI.failNotFound(res);
  } else {
    product.set({
      name: req.body.name || product.name,
      price: req.body.price || product.price,
    });

    const data = await product.save();
    if (!data) {
      respAPI.fail(res, 'Unable to update a data');
    } else {
      respAPI.respond(res, data, `Updated. ID: ${productId}`);
    }
  }
};

exports.destroy = async (req, res) => {
  const productId = req.params.productId;
  const product = await ProductModel.findByPk(productId)
      .catch(console.error);
  if (!product) {
    respAPI.failNotFound(res);
  } else {
    const data = await product.destroy();
    if (!data) {
      respAPI.fail(res, 'Unable to delete a data');
    } else {
      respAPI.respond(res, data, `Deleted. ID: ${productId}`);
    }
  }
};
