const Freelance = require("../models/freelance");
const Employer = require("../models/user");

const getModelByUserType = (userType) => {
  switch (userType) {
    case "freelance":
      return Freelance;
    case "employer":
      return Employer;
    default:
      throw new Error("Invalid user type");
  }
};

module.exports = getModelByUserType;
