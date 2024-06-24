const mongoose = require('mongoose');

const contractSchema = new mongoose.Schema({
  job: {
    type: String,
    required: true,
    min: 50,
    max: 150,
  },
  requirement: {
    type: String,
    required: true,
    min: 300,
    max: 5000,
  },
  conditions: {
    type: String,
    required: true,
    min: 50,
    max: 3000,
  },
  price: {
    type: Number,
    required: true,
  },
  delay: {
    type: String,
    required: true,
  },
  createdAT: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['pending', 'canceled', 'ongoing', 'rejected'],
    default: 'pending',
  },
  startAT: {
    type: Date,
  },
  endAT: {
    type: Date,
  },
  employerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'employers',
  },
  freelancerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'freelancers',
  },
});

const contract = mongoose.model('contracts', contractSchema);

module.exports = contract;
