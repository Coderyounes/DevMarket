const freelance = require('../models/freelance');
const employer = require('../models/employer');

const checkFreelancer = async (req, res, next) => {
  try {
    const user = await freelance.findOne({ firebaseUID: req.user.uid });
    if (user) {
      if (user.usertype === 'freelance') {
        next();
      }
    } else {
      res.status(403).send({ message: 'Access denied. User is not an freelance.' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Server error' });
  }
};

const checkEmployer = async (req, res, next) => {
  try {
    const user = await employer.findOne({ firebaseUID: req.user.uid });
    if (user) {
      if (user.usertype === 'employer') {
        next();
      }
    } else {
      res.status(403).send({ message: 'Access denied. User is not an employer.' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Server error' });
  }
};

module.exports = { checkFreelancer, checkEmployer };
