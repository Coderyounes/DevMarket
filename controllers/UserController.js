const jwt = require('jsonwebtoken');
const { getAuth, signInWithEmailAndPassword } = require('firebase/auth');
const admin = require('../config/firebase-admin-config');
const getModelByUserType = require('../utils/getModelByUserType');
require('dotenv').config({ path: './utils/.env' });
require('../config/firebase-config');

const signUp = async (req, res) => {
  const {
    email, password, usertype, firstname, lastname, country,
  } = req.body;
  if (usertype !== 'freelance' && usertype !== 'jobseeker') {
    return res.status(400).json({ error: 'Undefined usertype' });
  }
  try {
    const userRecord = await admin.auth().createUser({
      email,
      password,
    });
    const userData = {
      _id: userRecord.uid,
      firstname,
      lastname,
      country,
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
    const idToken = req.headers.authorization.split('Bearer ')[1];
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    await admin.auth().revokeRefreshTokens(decodedToken.uid);

    res.status(200).send({ message: 'User signed out successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Failed to sign out user' });
  }
};

module.exports = { signUp, login, signOut };
