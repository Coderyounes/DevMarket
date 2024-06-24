const mongoose = require('mongoose');

const EmployerSchema = new mongoose.Schema({
  company: {
    type: String,
    min: 3,
    max: 25,
  },
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
    min: [18, 'Must be at least 18 years old'],
    max: 100,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  city: { type: String },
  photo: { type: Buffer },
});

const employer = mongoose.model('employers', EmployerSchema);
module.exports = employer;
