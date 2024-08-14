const admin = require("firebase-admin");
const employer = require("../models/user");
require("dotenv").config({ path: "./utils/.env" });

const discret = process.env.DISCRET;
// eslint-disable-next-line consistent-return
const employerProfile = async (req, res) => {
  try {
    const user = await employer
      .findOne({ firebaseUID: req.user.uid })
      .select(discret);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

// eslint-disable-next-line consistent-return
const updateProfile = async (req, res) => {
  try {
    const { firstname, lastname } = req.body;

    const user = await employer
      .findOneAndUpdate(
        { firebaseUID: req.user.uid },
        { firstname, lastname },
        { new: true }
      )
      .select(discret);
    if (!user) {
      return res.status(404).send("User not found");
    }

    res.status(201).json(user);
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

const deleteProfile = async (req, res) => {
  try {
    await employer.findOneAndDelete({ firebaseUID: req.user.uid });
    const user = await admin.auth().getUser(req.user.uid);
    await admin.auth().deleteUser(user.uid);

    res.status(200).json("Your Account Has Been Deleted");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  employerProfile,
  updateProfile,
  deleteProfile,
};
