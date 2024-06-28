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
      projectid: req.params.id,
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

const proposalCancel = async (req, res) => {
  try {
    await Proposal.findByIdAndDelete({ _id: req.params.id });
    await Project.updateOne(
      {},
      { $pull: { applications: { _id: req.params.id } } },
      { multi: true },
    );
    return res.status(200).send({ message: 'Proposal deleted' });
  } catch (error) {
    return res.status(500).send('Iternal Server Error');
  }
};

const myProposals = async (req, res) => {
  try {
    const freelanceId = req.user.id;
    const proposals = await Proposal.find({ freelanceId });
    return res.status(200).json(proposals);
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
};

const oneProposal = async (req, res) => {
  const propsalId = req.params.id;
  try {
    const proposal = await Proposal.findById({ _id: propsalId });
    return res.status(200).json(proposal);
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
};

// Employers Controller
const readallproposal = async (req, res) => {
  const projectid = req.params.id;

  try {
    const project = await Project.findById(projectid);
    const proposals = project.applications;
    return res.status(200).json(proposals);
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
};

const readoneproposal = async (req, res) => {
  const ProposalID = req.params.id;
  try {
    const proposal = await Proposal.findById({ _id: ProposalID });
    return res.status(200).json(proposal);
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
};

const rejectProposal = async (req, res) => {
  const proposalid = req.params.id;

  try {
    await Proposal.findByIdAndUpdate(
      { _id: proposalid },
      { status: 'rejected' },
    );
    await Project.updateOne(
      {},
      { $pull: { applications: { _id: proposalid } } },
      { multi: true },
    );
    return res.status(200).send('Proposal has Been Rejected');
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
};

const acceptProposal = async (req, res) => {
  const proposalid = req.params.id;
  try {
    const proposal = await Proposal.findByIdAndUpdate(
      { _id: proposalid },
      { status: 'accepted' },
    );
    await Project.findByIdAndUpdate(
      proposal.projectid,
      { status: 'in talks' },
    );
    return res.status(200).send('Proposal Accepted');
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  sendProposal,
  proposalCancel,
  myProposals,
  oneProposal,
  readallproposal,
  readoneproposal,
  rejectProposal,
  acceptProposal,
};

/*
    freelance send proposal
    proposal added jo project model ( jobappilcations)
    freelance job status update to pending
    employer receive the job proposal
    reject it  -> update the job status
    accept it -> job status
*/
