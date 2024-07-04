const freelance = require('../models/freelance');
const Project = require('../models/projects');
const Service = require('../models/services');
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

const allProjects = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = 10;

    const skip = (page - 1) * limit;

    const projects = await Project.find().select(discret).skip(skip).limit(limit);
    return res.status(200).send(projects);
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
};
const readService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).send('Service Not Found');
    }

    return res.status(200).json(service);
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
};

const allServices = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = 10;

    const skip = (page - 1) * limit;

    const service = await Service.find().select(discret).skip(skip).limit(limit);
    return res.status(200).send(service);
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
};

/* const project_sample = async (req, res) => {
  const category = req.params.category;
  try {
    const projects =
  } catch (error) {

  }
}; */

module.exports = {
  getProfile, allProfiles, readProject, allProjects, readService, allServices, project_sample,
};
