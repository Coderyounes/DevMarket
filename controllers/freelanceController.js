const freelance = require('../models/freelance');
require('dotenv').config({ path: './utils/.env' });

const discret = process.env.DISCRET;
// eslint-disable-next-line consistent-return
const getProfile = async (req, res) => {
  try {
    const user = await freelance.findOne({ firebaseUID: req.user.uid }).select(discret);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
};

const updateProfile = async (req, res) => {
  try {
    const { firstname, lastname, skills } = req.body;

    const user = await freelance.findOneAndUpdate(
      { firebaseUID: req.user.uid },
      { firstname, lastname, skills },
      { new: true },
    ).select(discret);
    if (!user) {
      return res.status(404).send('User not found');
    }

    res.status(201).json(user);
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
};
// const deleteProfile = async (req, res) => {};
// const allProfiles = async (req, res) => {}; // Pagination required

module.exports = { getProfile, updateProfile };
