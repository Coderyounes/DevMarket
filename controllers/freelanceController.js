const admin = require('firebase-admin');
const freelance = require('../models/freelance');
require('dotenv').config({ path: './utils/.env' });

const discret = process.env.DISCRET;
// eslint-disable-next-line consistent-return
const userProfile = async (req, res) => {
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

// eslint-disable-next-line consistent-return
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

const deleteProfile = async (req, res) => {
  try {
    await freelance.findOneAndDelete({ firebaseUID: req.user.uid });
    const user = await admin.auth().getUser(req.user.uid);
    await admin.auth().deleteUser(user.uid);

    res.status(200).json('Your Account Has Been Deleted');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  userProfile, updateProfile, deleteProfile,
};
