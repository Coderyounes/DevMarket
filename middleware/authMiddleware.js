const admin = require('../config/firebase-admin-config');

const authenticate = async (req, res, next) => {
  try {
    const idToken = req.headers.authorization.split('Bearer ')[1];
    const decodedToken = await admin.auth().verifyIdToken(idToken, true);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).send({ error: 'Authentication failed' });
  }
};

module.exports = {
  authenticate,
};
