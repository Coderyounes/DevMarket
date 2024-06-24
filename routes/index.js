const express = require('express');
const userController = require('../controllers/UserController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

// Authetication routes
router.post('/signup', userController.signUp);
router.post('/login', userController.login);
router.post('/logout', authenticate, userController.signOut);
router.post('/resetpassword');

module.exports = router;
