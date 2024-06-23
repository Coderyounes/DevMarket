const mongoose = require('mongoose');

const freelanceSchema = new mongoose.Schema({
  _id: { type: String, required: true, unique: true },
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
    enum: ['freelance', 'employer'],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  city: { type: String },
  photo: { type: Buffer },
  skills: { type: String },

});

const Freelance = mongoose.model('Freelance', freelanceSchema);

module.exports = Freelance;

// TODO: Complete other Models Definition & Validation
// TODO: Setup Basic CRUD operation for Freelancer
// TODO: Setup Basic CRUD operation for employer
