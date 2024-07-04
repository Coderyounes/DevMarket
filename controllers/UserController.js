const firebase = require('firebase/app');
const { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } = require('firebase/auth');
const admin = require('../config/firebase-admin-config');
const getModelByUserType = require('../utils/getModelByUserType');
require('dotenv').config({ path: './utils/.env' });
require('../config/firebase-config');

const signUp = async (req, res) => {
  const {
    email, password, usertype, firstname, lastname, country, address, city, age, skills, photo,
  } = req.body;

  const requiredFields = ['email', 'password', 'usertype', 'firstname', 'lastname', 'country', 'age'];

  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res.status(400).json({ error: `Missing required field: ${field}` });
    }
  }

  if (usertype !== 'freelance' && usertype !== 'employer') {
    return res.status(400).json({ error: 'Undefined usertype' });
  }

  try {
    const userRecord = await admin.auth().createUser({
      email,
      password,
    });
    const userData = {
      firstname,
      lastname,
      country,
      city,
      email,
      address,
      age,
      skills,
      photo,
      usertype,
      firebaseUID: userRecord.uid,
    };

    const UserModel = getModelByUserType(usertype);
    const newUser = new UserModel(userData);

    await newUser.save();

    return res.status(201).json({ message: `User created: ${userRecord.uid}` });
  } catch (err) {
    console.error('Error creating user:', err);
    return res.status(500).json({ error: 'Error creating user ' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const auth = getAuth();

    const userRecord = await signInWithEmailAndPassword(auth, email, password);
    const idToken = await userRecord.user.getIdToken();

    res.json({ idToken });
  } catch (err) {
    console.error('Login error', err);
    res.status(401).json({ error: 'Login failed. Invalid credentials' });
  }
};

const signOut = async (req, res) => {
  try {
    await admin.auth().revokeRefreshTokens(req.user.uid);
    res.status(200).send({ message: 'User signed out successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Failed to sign out user' });
  }
};

const sendPasswordReset = async (req, res) => {
  const { email } = req.body;

  try {
    const auth = getAuth();
    await sendPasswordResetEmail(auth, email);
    res.status(200).json({ message: 'Password reset email sent' });
  } catch (err) {
    console.error('Password reset error', err);
    res.status(500).json({ error: 'Failed to send password reset email' });
  }
};

module.exports = {
  signUp, login, signOut, sendPasswordReset,

};
