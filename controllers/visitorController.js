const { default: mongoose } = require('mongoose');
const freelance = require('../models/freelance');
require('dotenv').config({ path: './utils/.env' });

const discret = process.env.DISCRET;

// eslint-disable-next-line consistent-return
const getProfile = async (req, res) => {
  const { id } = req.params;
  const status = mongoose.Types.ObjectId.isValid(id);
  if (!status) {
    return res.status(403).json('Wrong ID');
  }
  try {
    const user = await freelance.findOne({ _id: id }).select(discret);
    if (!user) {
      return res.status(404).json({ message: 'Freelance Profile Not Found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const allProfiles = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = 10;

    const skip = (page - 1) * limit;

    const users = await freelance.find().select(discret).skip(skip).limit(limit); // should add _id
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

module.exports = { getProfile, allProfiles };
