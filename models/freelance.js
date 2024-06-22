const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const freelanceSchema = new mongoose.Schema({
  _id: { type: String, default: uuidv4 },
  info: {
    name: { type: String, required: true },
    address: { type: String },
    country: { type: String, required: true },
    city: { type: String },
    paymentMethod: { type: String, required: true },
    photo: { type: Buffer },
    skills: { type: String },
    expertise: { type: Number },
  },
});

const Freelance = mongoose.model('Freelance', freelanceSchema);

module.exports = Freelance;
