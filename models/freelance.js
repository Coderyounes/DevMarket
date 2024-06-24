const mongoose = require('mongoose');

const freelanceSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    min: 3,
    max: 20,
  },
  lastname: {
    type: String,
    required: true,
    min: 3,
    max: 30,
  },
  address: {
    type: String,
    min: 10,
    max: 100,
  },
  country: {
    type: String,
    required: true,
  },
  usertype: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  age: {
    type: Number,
    required: true,
    min: [18, 'Must be at least 18 years old'],
    max: 100,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  firebaseUID: {
    type: String,
  },
  city: { type: String },
  photo: { type: Buffer },
  skills: { type: String },
});

const Freelance = mongoose.model('Freelance', freelanceSchema);

module.exports = Freelance;
