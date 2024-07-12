const Freelancer = require('../models/freelance');
const Employer = require('../models/employer');
const Contract = require('../models/contract');

// TODO: trigger when the freelance accept the contract
const handlePaymentWorkflow = async (req, res) => {
  const contractId = req.params.id;
  const contract = await Contract.findById(contractId);
  console.log('Here');
  const employer = await Employer.findOne({ firebaseUID: contract.employerId });
  employer.balance -= contract.price * 1.05;
  await employer.save();

  return res.status(200).json({ message: 'Payment processed successfully' });
};

// TODO: trigger when the Employer accept the delivery
const handleDeliveryAcceptance = async (req, res) => {
  const contractId = req.params.id;
  const contract = await Contract.findById(contractId);

  const freelancer = await Freelancer.findOne({ firebaseUID: contract.freelancerId });
  freelancer.balance += contract.price * 0.95;
  await freelancer.save();

  return res.status(200).json({ message: 'Payment released successfully' });
};

module.exports = { handlePaymentWorkflow, handleDeliveryAcceptance };
