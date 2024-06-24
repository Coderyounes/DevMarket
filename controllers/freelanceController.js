const freelance = require('../models/freelance');

// eslint-disable-next-line consistent-return
const getProfile = async (req, res) => {
  const discret = '-firebaseUID -_id -__v -createdAt';
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

// const updateProfile = async (req, res) => {};
// const deleteProfile = async (req, res) => {};
// const allProfiles = async (req, res) => {}; // Pagination required

module.exports = { getProfile };
