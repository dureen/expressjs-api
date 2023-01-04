// Status: ready!
const resJson = require('../resources/json');

const ProductModel = require('../models/ProductModel');

exports.index = async (req, res) => {
  const products = await ProductModel.findAll();
  res.json(resJson(products));
};

exports.store = async (req, res) => {
  if (!req.body.name || !req.body.price) {
    res.json(resJson(null, 'Failed.', 400, 0));
  } else {
    const product = await ProductModel.create({
      name: req.body.name,
      price: req.body.price,
    });
    if (!product) {
      res.json(resJson(null, 'Failed.', 400, 0));
    } else {
      res.json(resJson(product, 'Created.', 201));
    }
  }
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
  if (!product) {
    res.json(resJson(null, 'Not found. Cannot update this data.', 404, 0));
  } else if (!req.body.name || !req.body.price) {
    res.json(resJson(null, 'Failed.', 400, 0));
  } else {
    // product.update
    product.set({
      name: req.body.name,
      price: req.body.price,
    });
    const updated = await product.save();
    if (!updated) {
      res.json(resJson(null, 'Failed.', 400, 0));
    } else {
      res.json(resJson(updated, 'Updated.', 200));
    }
  }
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
