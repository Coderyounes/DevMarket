const express = require('express');
const userController = require('../controllers/UserController');
const freelanceController = require('../controllers/freelanceController');
const visitorController = require('../controllers/visitorController');
const employerController = require('../controllers/EmployerController');
const { authenticate } = require('../middleware/authMiddleware');
const { checkFreelancer, checkEmployer } = require('../middleware/CheckPermissionMiddleware');

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
router.get('/freelance/userProfile', authenticate, checkFreelancer, freelanceController.userProfile);
router.put('/freelance//updateProfile', authenticate, checkFreelancer, freelanceController.updateProfile);
router.delete('/freelance//deleteProfile', authenticate, checkFreelancer, freelanceController.deleteProfile);
// Employer routes
router.get('/employer/Profile', authenticate, checkEmployer, employerController.employerProfile);
router.put('/employer/updateProfile', authenticate, checkEmployer, employerController.updateProfile);
router.delete('/employer/deleteProfile', authenticate, checkEmployer, employerController.deleteProfile);
// unauth user routes
router.get('/getProfile/:id', visitorController.getProfile);
router.get('/allProfile', visitorController.allProfiles);

module.exports = router;
