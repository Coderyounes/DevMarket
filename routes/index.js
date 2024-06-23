const express = require('express');
const userController = require('../controllers/UserController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

// Authetication routes
router.post('/signup', userController.signUp);
router.post('/login', userController.login);
router.post('/logout', userController.signOut);
router.post('/resetpassword');

// Token Verification
router.get('/', verifyToken, (req, res) => {
  res.json({ message: 'Authenticated route', user: req.user });
});

module.exports = router;
