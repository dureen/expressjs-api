exports.index = (req, res) => {
  res.send('/GET index of produtcs');
};

exports.store = (req, res) => {
  res.send('/POST product data');
};

exports.show = (req, res) => {
  res.send('/GET product id: ' + req.params.productId);
};

exports.update = (req, res) => {
  res.send('/PUT product id: ' + req.params.productId);
};

exports.destroy = (req, res) => {
  res.send('/DELETE product id: ' + req.params.productId);
};
