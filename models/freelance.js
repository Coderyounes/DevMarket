const mongoose = require('mongoose');

const freelanceSchema = new mongoose.Schema({
  _id: { type: String, required: true, unique: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  address: { type: String },
  country: { type: String, required: true },
  city: { type: String },
  photo: { type: Buffer },
  skills: { type: String },
  usertype: { type: String, required: true },
});

const Freelance = mongoose.model('Freelance', freelanceSchema);

module.exports = Freelance;
