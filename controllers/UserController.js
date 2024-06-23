const jwt = require('jsonwebtoken');
const { getAuth, signInWithEmailAndPassword } = require('firebase/auth');
const admin = require('../config/firebase-admin-config');
require('dotenv').config({ path: './utils/.env' });
require('../config/firebase-config');

const signUp = async (req, res) => {
  const { email, password } = req.body;
  // TODO: add other fields: names, userType, country , age ..etc
  try {
    const userRecord = await admin.auth().createUser({
      email,
      password,
    });
    // TODO: create a call to mongodb & store all the field except email & password
    res.status(201).json({ message: `User created: ${userRecord.uid}` });
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ error: 'Error creating user ' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const auth = getAuth();

    const userRecord = await signInWithEmailAndPassword(auth, email, password);

    const token = jwt.sign({
      uid: userRecord.user.uid,
      email: userRecord.user.email,
    }, process.env.MY_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    console.error('Login error', err);
    res.status(401).json({ error: 'Login failed. Invalid credentials' });
  }
};

module.exports = { signUp, login };
