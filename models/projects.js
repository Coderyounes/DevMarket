const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 10,
    max: 150,
  },
  description: {
    type: String,
    required: true,
    min: 100,
    max: 3000,
  },
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: 'Open',
    enum: ['Open', 'Closed', 'talks'],
  },
  delay: {
    type: String,
    required: true,
  },
  employer: { type: mongoose.Schema.Types.ObjectId, ref: 'employers' },
  freelance: { type: mongoose.Schema.Types.ObjectId, ref: 'freelances', default: null },
  applications: [{
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'jobapplications',
    },
    letter: {
      type: String,
      required: true,
    },
    cv: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
  }],
}, {
  timestamps: true,
});

const project = mongoose.model('projects', projectSchema);

module.exports = project;
