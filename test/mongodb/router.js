const Model = require('../models/model');

// GET All
router.get('/index', async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

router.post('/post', (req, res) => {
  const data = new Model({
    name: req.body.name,
    price: req.body.price,
  });

  try {
    const dataToSave = data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
});

// Get ID
router.get('/get/:id', async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

// Update
router.patch('/update/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = {new: true};

    const result = await Model.findByIdAndUpdate(
        id, updatedData, options,
    );

    res.send(result);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
});

// Delete
router.delete('/delete/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
});
