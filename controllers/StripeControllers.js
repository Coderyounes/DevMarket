require('dotenv').config({ path: '../utils/.env' });

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Contract = require('../models/contract');
const Freelancer = require('../models/freelance');
const Employer = require('../models/employer');

// TODO: trigger when the freelance accept the contract
exports.handlePaymentWorkflow = async (contractId) => {
  const contract = await Contract.findById(contractId);

  if (contract.status !== 'accepted') {
    throw new Error('Contract must be accepted before payment can be processed');
  }

  const clientSecret = await stripe.paymentIntents.create({
    amount: contract.amount,
    currency: 'usd',
  });

  contract.paymentIntent = clientSecret.client_secret;
  await contract.save();

  const employer = await Employer.findById(contract.employerId);
  employer.balance -= contract.amount * 1.05;
  await employer.save();

  return clientSecret.client_secret;
};

// TODO: trigger when the EMployer accept the delivery
exports.handleDeliveryAcceptance = async (contractId) => {
  const contract = await Contract.findById(contractId);

  if (contract.status !== 'delivered') {
    throw new Error('Contract must be delivered before payment can be released');
  }

  const freelancer = await Freelancer.findById(contract.freelancerId);
  freelancer.balance += contract.amount * 0.95;
  await freelancer.save();
};
