const mongoose = require('mongoose');
const { calculateEndDate } = require('../middleware/ContractMiddleware');

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
    min: 10,
    max: 5000,
  },
  conditions: {
    type: String,
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
    type: String,
    required: true,
  },
  projectId: {
    type: String,
    required: true,
  },
  freelancerId: {
    type: String,
  },
}, {
  timestamps: true,
});

contractSchema.pre('save', calculateEndDate);

const contract = mongoose.model('contracts', contractSchema);

module.exports = contract;
