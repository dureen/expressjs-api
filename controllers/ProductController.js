const ProductModel = require('../models/ProductModel');

exports.index = async (req, res) => {
  // res.send('/GET index of produtcs');
  const products = await ProductModel.findAll().catch(console.error);
  const jsonString = JSON.stringify(products, null, 2);
  res.json(JSON.parse(jsonString));
};

exports.store = async (req, res) => {
  res.send('/POST product data');
};

exports.show = async (req, res) => {
  // res.send('/GET product id: ' + req.params.productId);
  const product = await ProductModel.findByPk(req.params.productId)
      .catch(console.error);
  const jsonString = JSON.stringify(product, null, 2);
  res.json(JSON.parse(jsonString));
};

exports.update = async (req, res) => {
  res.send('/PUT product id: ' + req.params.productId);
};

exports.destroy = async (req, res) => {
  res.send('/DELETE product id: ' + req.params.productId);
};
