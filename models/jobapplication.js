const mongoose = require('mongoose');

const jobappSchema = new mongoose.Schema({
  letter: {
    type: String,
    required: true,
    min: 300,
    max: 4000,
  },
  cv: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  freelancerid: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'rejected', 'accepted'],
    default: 'pending',
  },
  projectid: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const jobApp = mongoose.model('jobapplications', jobappSchema);

module.exports = jobApp;
