const ProductModel = require('../models/ProductModel');

exports.index = async (req, res) => {
  const data = await ProductModel.findAll();
  res.json(resourceJson(data));
};

exports.store = async (req, res) => {
  res.send('/POST product data');
};

exports.show = async (req, res) => {
  const data = await ProductModel.findByPk(req.params.productId);
  res.json(resourceJson(data));
};

exports.update = async (req, res) => {
  const data = await ProductModel.findByPk(req.params.productId);
  // res.send('/PUT product id: ' + req.params.productId);
  res.json(resourceJson(data));
};

exports.destroy = async (req, res) => {
  const data = await ProductModel.findByPk(req.params.productId);
  // res.send('/DELETE product id: ' + req.params.productId);
  res.json(resourceJson(data));
};
