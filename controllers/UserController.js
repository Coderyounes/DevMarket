const { default: firebase } = require('firebase/compat/app');
const admin = require('../config/firebase-admin-config');

const auth = firebase.auth();

const signUp = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userRecord = await admin.auth().createUser({
      email,
      password,
    });

    res.status(201).json({ message: `User created: ${userRecord.uid}` });
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ error: 'Error creating user ' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
};

module.exports = { signUp };
