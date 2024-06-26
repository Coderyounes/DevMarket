const freelance = require('../models/freelance');
const Project = require('../models/projects');
require('dotenv').config({ path: './utils/.env' });

const discret = process.env.DISCRET;

// eslint-disable-next-line consistent-return
const getProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await freelance.findOne({ _id: id }).select(discret);
    if (!user) {
      return res.status(404).json({ message: 'Freelance Profile Not Found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const allProfiles = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = 10;

    const skip = (page - 1) * limit;

    const users = await freelance.find().select(discret).skip(skip).limit(limit); // should add _id
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

// front end , fetchallproject using allproject & craft url/id
// eslint-disable-next-line consistent-return
const readProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).send('Project Not Found');
    }

    res.status(200).json(project);
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
};

// const readService = async (req, res) => {};

// const allProjects = async (req, res) => {}; // pagination needed
// const allServices = async (req, res) => {}; // Pagination needed

module.exports = { getProfile, allProfiles, readProject };
