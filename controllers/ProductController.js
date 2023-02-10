const ProductModel = require('../models/ProductModel');
const resCode = require('../data/resources/resCode');

exports.index = async (req, res) => {
  const result = await ProductModel.findAll()
      .catch(console.error);
  resCode.set200(res, result);
};

exports.store = async (req, res) => {
  if (!req.body.name) {
    return resCode.set403(res, 'name field is required.');
  }
  if (!req.body.price) {
    return resCode.set403(res, 'price field is required.');
  }

  const result = await ProductModel.create({
    name: req.body.name,
    price: req.body.price,
  }).catch(console.error);
  if (!result) {
    resCode.set422(res);
  } else {
    resCode.set201(res, result);
  }
};

exports.show = async (req, res) => {
  const productId = req.params.productId;
  const result = await ProductModel.findByPk(productId)
      .catch(console.error);
  if (!result) {
    resCode.set404(res);
  } else {
    resCode.set200(res, result);
  }
};

exports.update = async (req, res) => {
  const productId = req.params.productId;
  const data = await ProductModel.findByPk(productId)
      .catch(console.error);
  if (!data) {
    resCode.set404(res);
  } else {
    data.set({
      name: req.body.name || data.name,
      price: req.body.price || data.price,
    });

    const result = await data.save();
    if (!result) {
      resCode.set422(res);
    } else {
      resCode.set200(res, result, `Updated. ID: ${productId}`);
    }
  }
};

exports.destroy = async (req, res) => {
  const productId = req.params.productId;
  const data = await ProductModel.findByPk(productId)
      .catch(console.error);
  if (!data) {
    resCode.set404(res);
  } else {
    const result = await data.destroy();
    if (!result) {
      resCode.set422(res);
    } else {
      resCode.set200(res, result, `Deleted. ID: ${productId}`);
    }
  }
};
