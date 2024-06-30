const Employer = require('../models/employer');
const Freelance = require('../models/freelance');
const Contract = require('../models/contract');
const Project = require('../models/projects');
const Proposal = require('../models/jobapplication');

const createContract = async (req, res) => {
  const projectId = req.params.id;
  const employerId = req.user.uid;
  const {
    job, requirement, price, delay,
  } = req.body;
  const project = await Project.findById({ _id: projectId });
  console.log(employerId);
  if (project.status === 'Closed') {
    return res.status(400).send('Project Closed');
  }
  try {
    const data = {
      job,
      requirement,
      price,
      delay,
      projectId,
      employerId,
    };
    const newContract = new Contract(data);
    newContract.save();
    return res.status(201).json(newContract);
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
};

const updateContract = async (req, res) => {
  const ContractId = req.params.id;
  const {
    job, requirement, price, delay,
  } = req.body;
  try {
    const contract = await Contract.findById({ _id: ContractId });
    if (contract.status === 'ongoing') {
      return res.status(403).send('Forbidden Action');
    }
    await Contract.findByIdAndUpdate(
      { _id: ContractId },
      {
        job, requirement, price, delay,
      },
      { new: true },
    );
    return res.status(201).json('Contract Updated');
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
};

const readContract = async (req, res) => {
  try {
    const contract = await Contract.findById({ _id: req.params.id });
    return res.status(200).json(contract);
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
};

const deleteContract = async (req, res) => {
  const contractId = req.params.id;
  try {
    const contract = await Contract.findById({ _id: contractId });
    if (contract.status === 'ongoing') {
      return res.status(403).send('Forbbiden Action');
    }
    await Contract.findByIdAndDelete({ _id: contractId });
    return res.status(200).send('Contract Deleted');
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
};

// Re enforce this to check freelanceId before accpt
const acceptContract = async (req, res) => {
  const contractId = req.params.id;
  const freelanceId = req.user.uid;
  try {
    const contract = await Contract.findById({ _id: contractId });
    await Contract.findByIdAndUpdate(
      { _id: contractId },
      { status: 'ongoing', freelancerId: freelanceId },
      { new: true },
    );
    await Project.findByIdAndUpdate(
      { _id: contract.projectId },
      { status: 'Closed', freelance: freelanceId },
    );
    return res.status(200).send('Contract Accepted');
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  createContract, updateContract, readContract, deleteContract, acceptContract,
};
// TODO: Accept Contract - Hold payment fr
// project Closed, contract onGoing, freelance ID link with contract
// TODO: Deliver the work()
// TODO: Accept the Delivery(project: finish, contract: finish , payments sent)
