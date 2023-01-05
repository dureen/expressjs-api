// Status: ready!
const rescJson = require('../resources/json');

const ProductModel = require('../models/ProductModel');

exports.index = async (req, res) => {
  const products = await ProductModel.findAll();
  res.json(rescJson(products));
};

exports.store = async (req, res) => {
  if (!req.body.name) {
    return res.status(403)
        .json(rescJson(null, '`name` field is required', 403, 0));
  }
  if (!req.body.price) {
    return res.status(403)
        .json(rescJson(null, '`price` field is required', 403, 0));
  }

  const product = await ProductModel.create({
    name: req.body.name,
    price: req.body.price,
  }).catch(console.error);
  if (!product) {
    res.status(422).json(rescJson(null, 'Unprocessable Entity.', 422, 0));
  } else {
    res.status(201).json(rescJson(product, 'Created.', 201));
  }
};

exports.show = async (req, res) => {
  const product = await ProductModel.findByPk(req.params.productId);
  if (!product) {
    res.status(404).json(rescJson(null, 'Not found.', 404, 0));
  } else {
    res.json(rescJson(product));
  }
};

exports.update = async (req, res) => {
  const product = await ProductModel.findByPk(req.params.productId);
  if (!product) {
    res.status(404).json(rescJson(null, 'Not found.', 404, 0));
  } else {
    product.set({
      name: req.body.name || product.name,
      price: req.body.price || product.price,
    });

    const updated = await product.save().catch(console.error);
    if (!updated) {
      res.status(422).json(rescJson(null, 'Unprocessable Entity.', 422, 0));
    } else {
      res.json(rescJson(updated, 'Updated.'));
    }
  }
};

exports.destroy = async (req, res) => {
  const productId = req.params.productId;
  const product = await ProductModel.findByPk(productId);
  if (!product) {
    res.status(404).json(rescJson(null, 'Not found.', 404, 0));
  } else {
    const x = await product.destroy().catch(console.error);
    if (!x) {
      res.status(422).json(rescJson(null, 'Unprocessable Entity.', 422, 0));
    } else {
      res.json(rescJson(null, 'Deleted.'));
    }
  }
};
