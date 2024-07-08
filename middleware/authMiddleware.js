const { auth } = require('../config/firebase-admin-config');

// eslint-disable-next-line consistent-return
const authenticate = async (req, res, next) => {
  try {
    const idToken = req.headers.authorization.split('Bearer ')[1];

    if (!idToken) {
      return res.status(401).send('Unauthorized');
    }
    const decodedToken = await auth.verifyIdToken(idToken, true);
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
