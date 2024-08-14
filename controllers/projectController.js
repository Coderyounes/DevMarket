const Project = require("../models/mission");
const Employer = require("../models/user");

const createProject = async (req, res) => {
  try {
    const employer = await Employer.findOne({ firebaseUID: req.user.uid });
    const { title, description, price, delay } = req.body;

    const data = {
      title,
      description,
      price,
      delay,
      employer: employer._id, // It's better to just store the employer's _id
      status: "Open",
    };

    const newProject = new Project(data);
    const savedProject = await newProject.save();

    return res.status(201).json({
      message: "New Project added",
      projectId: savedProject._id,
    });
  } catch (error) {
    console.error("Error creating project:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateProject = async (req, res) => {
  const { title, description, price, delay } = req.body;

  const projectId = req.params.id;
  try {
    const project = await Project.findOneAndUpdate(
      { _id: projectId },
      {
        title,
        description,
        price,
        delay,
      },
      { new: true }
    );

    if (!project) {
      return res.status(404).send("Project not found");
    }
    return res.status(201).send(project);
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

const deleteProject = async (req, res) => {
  try {
    await Project.findOneAndDelete({ _id: req.params.id });
    return res.status(200).send("Project Deleted!");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  createProject,
  updateProject,
  deleteProject,
};
