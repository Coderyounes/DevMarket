const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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

const User = new mongoose.model('user', userSchema);

module.exports = User;
