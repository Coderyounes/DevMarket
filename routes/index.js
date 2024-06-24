const express = require('express');
const userController = require('../controllers/UserController');
const freelanceController = require('../controllers/freelanceController');
const visitorController = require('../controllers/visitorController');
const employerController = require('../controllers/EmployerController');
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
router.get('/freelance/userProfile', authenticate, freelanceController.userProfile);
router.put('/freelance//updateProfile', authenticate, freelanceController.updateProfile);
router.delete('/freelance//deleteProfile', authenticate, freelanceController.deleteProfile);
// Employer routes
router.get('/employer/Profile', authenticate, employerController.employerProfile);
router.put('/employer/updateProfile', authenticate, employerController.updateProfile);
router.delete('/employer/deleteProfile', authenticate, employerController.deleteProfile);
// unauth user routes
router.get('/getProfile/:id', visitorController.getProfile);
router.get('/allProfile', visitorController.allProfiles);

module.exports = router;
