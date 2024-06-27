const express = require('express');
const userController = require('../controllers/UserController');
const freelanceController = require('../controllers/freelanceController');
const visitorController = require('../controllers/visitorController');
const employerController = require('../controllers/EmployerController');
const projectController = require('../controllers/projectController');
const serviceController = require('../controllers/serviceController');
const checkIdValidity = require('../middleware/CheckIdValidity');
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
router.post('/freelance/createService', authenticate, checkFreelancer, serviceController.createService);
router.put('/freelance/updateService/:id', checkIdValidity, authenticate, checkFreelancer, serviceController.updateService);
router.delete('/freelance/deleteService/:id', checkIdValidity, authenticate, checkFreelancer, serviceController.deleteService);

// Employer routes
router.get('/employer/Profile', authenticate, checkEmployer, employerController.employerProfile);
router.put('/employer/updateProfile', authenticate, checkEmployer, employerController.updateProfile);
router.delete('/employer/deleteProfile', authenticate, checkEmployer, employerController.deleteProfile);
router.post('/employer/createProject', authenticate, checkEmployer, projectController.createProject);
router.put('/employer/updateProject/:id', checkIdValidity, authenticate, checkEmployer, projectController.updateProject);
router.delete('/employer/deleteProject/:id', checkIdValidity, authenticate, checkEmployer, projectController.deleteProject);

// unauth user routes
router.get('/getProfile/:id', checkIdValidity, visitorController.getProfile);
router.get('/allProfile', visitorController.allProfiles);
router.get('/project/:id', checkIdValidity, visitorController.readProject);
router.get('/allProjects', visitorController.allProjects);

module.exports = router;
