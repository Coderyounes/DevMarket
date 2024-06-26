const Project = require('../models/projects');
const Employer = require('../models/employer');

const createProject = async (req, res) => {
  const employer = await Employer.findOne({ firebaseUID: req.user.uid });
  const {
    title, description, price, delay,
  } = req.body;
  try {
    const data = {
      title,
      description,
      price,
      delay,
      employer,
      status: 'Open',
    };
    const newproject = new Project(data);
    newproject.save();
    return res.status(201).send('new Project added');
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
};

const updateProject = async (req, res) => {
  const {
    title, description, price, delay,
  } = req.body;

  const projectId = req.params.id;
  try {
    const project = await Project.findOneAndUpdate(
      { _id: projectId },
      {
        title, description, price, delay,
      },
      { new: true },
    );

    if (!project) {
      return res.status(404).send('Project not found');
    }
    return res.status(201).send(project);
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
};

const deleteProject = async (req, res) => {
  try {
    await Project.findOneAndDelete({ _id: req.params.id });
    return res.status(200).send('Project Deleted!');
  } catch (error) {
    console.log(error);
    return res.status(500).send('Internal Server Error');
  }
};

// TODO: const apply = async (req, res) => {};  this is for Freelancers if staus Open if Closed prevent
// TODO: const applyCancel = async (req, res) => {}; this for Freelancers if it from the applting cancel his appilcation
// TODO: Create, update, Delete Services
// TODO: read, Create , Update, Delete Contract  ( managed using Contract status)
module.exports = {
  createProject, updateProject, deleteProject,
};
