const multer = require('multer');
const Service = require('../models/services');
const Freelance = require('../models/freelance');

const upload = multer({ dest: 'uploads/' });

const createService = async (req, res) => {
  upload.array('images')(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    const {
      title, description, price, tags,
    } = req.body;
    const freelance = await Freelance.findOne({ firebaseUID: req.user.uid });
    const images = req.files.map((file) => file.path);

    try {
      const data = {
        title,
        description,
        price,
        tags,
        images,
        freelance,
      };

      const newService = new Service(data);
      await newService.save();
      return res.status(201).send(newService);
    } catch (error) {
      return res.status(500).send('internal Server Error');
    }
  });
};

const updateService = async (req, res) => {
  const {
    title, description, price, tags,
  } = req.body;
  const serviceId = req.params.id;

  try {
    const service = await Service.findByIdAndUpdate(
      serviceId,
      {
        title, description, price, tags,
      },
      { new: true },
    );

    if (!service) {
      return res.status(404).send({ message: 'Service not found' });
    }
    return res.send(service);
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
};

const deleteService = async (req, res) => {
  try {
    await Service.findOneAndDelete({ _id: req.params.id });
    return res.status(200).send('Service Deleted!');
  } catch (error) {
    console.log(error);
    return res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  createService, updateService, deleteService,
};
