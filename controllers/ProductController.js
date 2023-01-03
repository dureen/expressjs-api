const ProductModel = require('../models/ProductModel');

exports.index = async (req, res) => {
  const data = await ProductModel.findAll()
      .catch(console.error);
  if (!data) {
    // code
  } else {
    // code
  }
  const jsonString = JSON.stringify(data, null, 2);
  res.json(JSON.parse(jsonString));
};

exports.store = async (req, res) => {
  res.send('/POST product data');
};

exports.show = async (req, res) => {
  const data = await ProductModel.findByPk(req.params.productId)
      .catch(console.error);
  if (!data) {
    // code
  } else {
    // code
  }
  const jsonString = JSON.stringify(data, null, 2);
  res.json(JSON.parse(jsonString));
};

exports.update = async (req, res) => {
  const data = await ProductModel.findByPk(req.params.productId)
      .catch(console.error);
  if (!data) {
    // code
  } else {
    // code
  }
  res.send('/PUT product id: ' + req.params.productId);
};

exports.destroy = async (req, res) => {
  const data = await ProductModel.findByPk(req.params.productId)
      .catch(console.error);
  if (!data) {
    // code
  } else {
    // code
  }
  res.send('/DELETE product id: ' + req.params.productId);
};
