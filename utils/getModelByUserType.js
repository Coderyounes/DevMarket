const Freelance = require('../models/freelance');
const Jobseeker = require('../models/jobseeker');

const getModelByUserType = (userType) => {
  switch (userType) {
    case 'freelance':
      return Freelance;
    case 'jobseeker':
      return Jobseeker;
    default:
      throw new Error('Invalid user type');
  }
};

module.exports = getModelByUserType;
