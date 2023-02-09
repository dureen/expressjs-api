const ProductModel = require('../models/ProductModel');

exports.index = async (req, res) => {
  const data = await ProductModel.findAll()
      .catch(console.error);
  res.json({
    status: 1,
    code: 200,
    message: 'OK.',
    data: data,
  });
};

exports.store = async (req, res) => {
  if (!req.body.name) {
    return res.status(403).json({
      status: 0,
      code: 403,
      message: 'name field is required.',
    });
  }
  if (!req.body.price) {
    return res.status(403).json({
      status: 0,
      code: 403,
      message: 'price field is required.',
    });
  }

  const result = await ProductModel.create({
    name: req.body.name,
    price: req.body.price,
  }).catch(console.error);
  if (!result) {
    res.status(422).json({
      status: 0,
      code: 422,
      message: 'Unprocessable Entity.',
    });
  } else {
    res.status(201).json({
      status: 1,
      code: 201,
      message: 'Created a new data.',
      data: result,
    });
  }
};

exports.show = async (req, res) => {
  const productId = req.params.productId;
  const data = await ProductModel.findByPk(productId)
      .catch(console.error);
  if (!data) {
    res.status(404).json({
      status: 0,
      code: 404,
      message: 'Data not found.',
    });
  } else {
    res.json({
      status: 1,
      code: 200,
      message: 'OK.',
      data: data,
    });
  }
};

exports.update = async (req, res) => {
  const productId = req.params.productId;
  const data = await ProductModel.findByPk(productId)
      .catch(console.error);
  if (!data) {
    res.status(404).json({
      status: 0,
      code: 404,
      message: 'Data not found.',
    });
  } else {
    data.set({
      name: req.body.name || data.name,
      price: req.body.price || data.price,
    });

    const result = await data.save();
    if (!result) {
      res.status(422).json({
        status: 0,
        code: 422,
        message: 'Unprocessable Entity.',
      });
    } else {
      res.json({
        status: 1,
        code: 200,
        message: `Updated. ID: ${productId}`,
        data: result,
      });
    }
  }
};

exports.destroy = async (req, res) => {
  const productId = req.params.productId;
  const data = await ProductModel.findByPk(productId)
      .catch(console.error);
  if (!data) {
    res.status(404).json({
      status: 0,
      code: 404,
      message: 'Data not found.',
    });
  } else {
    const result = await data.destroy();
    if (!result) {
      res.status(422).json({
        status: 0,
        code: 422,
        message: 'Unprocessable Entity.',
      });
    } else {
      res.json({
        status: 1,
        code: 200,
        message: `Deleted. ID: ${productId}`,
      });
    }
  }
};
