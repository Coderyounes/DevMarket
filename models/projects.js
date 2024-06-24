const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {},
  description: {},
  price: {},
  delay: {},
  employer: { type: mongoose.Schema.Types.ObjectId, ref: 'employers' },
  freelance: { type: mongoose.Schema.Types.ObjectId, ref: 'freelances', default: null },
});

const project = new mongoose.model('projects', projectSchema);

module.exports = project;
