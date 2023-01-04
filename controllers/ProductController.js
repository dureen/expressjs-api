const resJson = require('../resources/json');

const ProductModel = require('../models/ProductModel');

exports.index = async (req, res) => {
  const products = await ProductModel.findAll();
  res.json(resJson(products));
};

exports.store = async (req, res) => {
  res.send('/POST product data');
};

exports.show = async (req, res) => {
  const product = await ProductModel.findByPk(req.params.productId);
  if (!product) {
    res.json(resJson(null, 'Not found.', 404, 0));
  } else {
    res.json(resJson(product));
  }
};

exports.update = async (req, res) => {
  const product = await ProductModel.findByPk(req.params.productId);
  // res.send('/PUT product id: ' + req.params.productId);
  res.json(resJson(product));
};

exports.destroy = async (req, res) => {
  const productId = req.params.productId;
  const product = await ProductModel.findByPk(productId);
  if (!product) {
    res.json(resJson(null, 'Not found.', 404, 0));
  } else {
    const x = await product.destroy().catch(console.error);
    if (!x) {
      const msg = 'Unable to delete product #' + productId;
      res.json(resJson(null, msg, 500, 0));
    } else {
      const msg = 'Successfully deleted product #' + productId;
      res.json(resJson(null, msg));
    }
  }
};
