const express = require('express');
const userController = require('../controllers/UserController');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

// Authetication routes
router.post('/signup', userController.signUp);
router.post('/login', userController.signIn);
router.post('/resetpassword');
router.post('/logout');

module.exports = router;
