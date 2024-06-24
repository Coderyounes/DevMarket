const mongoose = require('mongoose');

const jobappSchema = new mongoose.Schema({
  letter: {
    type: String,
    required: true,
    min: 300,
    max: 4000,
  },
  cv: {
    type: Buffer,
    required: true,
  },
  freelancerid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'freelancers',
    required: true,
  },
});

const jobApp = new mongoose.model('jobapplications', jobappSchema);

module.exports = jobApp;
