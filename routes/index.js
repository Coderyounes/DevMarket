const express = require('express');
const userController = require('../controllers/UserController');
const freelanceController = require('../controllers/freelanceController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

// Authetication routes
router.post('/signup', userController.signUp);
router.post('/login', userController.login);
router.post('/logout', authenticate, userController.signOut);
router.post('/resetpassword'); // Later
router.post('/sendverification'); // Later

// Freelance routes
router.get('/getProfile', authenticate, freelanceController.getProfile);
router.put('/updateProfile', authenticate, freelanceController.updateProfile);
router.delete('/deleteProfile', authenticate, freelanceController.deleteProfile);
// Employer routes

module.exports = router;
