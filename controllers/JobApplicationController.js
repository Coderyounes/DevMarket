const Proposal = require('../models/jobapplication');
const Freelance = require('../models/freelance');
const Employer = require('../models/employer');
const Project = require('../models/projects');
// proposal, need to check the Project status before if it closed so show message say it closed
// Freelance Controllers
const sendProposal = async (req, res) => {
  const { letter } = req.body;
  const cv = req.file;
  try {
    const freelance = await Freelance.findOne({ firebaseUID: req.user.uid });
    if (!freelance) {
      return res.status(404).send('dev/project not Found');
    }
    const data = {
      letter,
      cv,
      freelancerid: freelance.firebaseUID,
      status: 'pending',
      project: req.params.id,
    };
    const newProposal = new Proposal(data);
    newProposal.save();
    const update = {
      $push: {
        applications: newProposal,
        letter,
        cv,
      },
    };

    const project = await Project.findOneAndUpdate(
      { _id: req.params.id },
      update,
    );
    if (!project) {
      return res.status(404).send('Resource Not Found');
    }

    return res.status(201).send({ message: 'Proposal sent' });
  } catch (error) {
    console.log(error);
    return res.status(500).send('Internal Server Error');
  }
};

module.exports = { sendProposal };

/* const proposalCancel = async (req, res) => {};
const listProposals = async (req, res) => {};
const OneProposal = async (req, res) => {}; */

// Employers Controller
// const readallproposal = async()
// const readoneproposal = async ()
// const rejectProposal = async() -> job status applicant updated
// const acceptProposal = async()  -> update project status / job status updated

/*
    freelance send proposal
    proposal added jo project model ( jobappilcations)
    freelance job status update to pending
    employer receive the job proposal
    reject it  -> update the job status
    accept it -> job status
*/
