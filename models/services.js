const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 10,
    max: 100,
  },
  Description: {
    type: String,
    required: true,
    min: 200,
    max: 1000,
  },
  Price: {
    type: Number,
    required: true,
  },
  Images: {
    type: Buffer,
    required: true,
  },
  Tags: {
    type: String,
    required: true,
  },
  createdAT: {
    type: Date,
    default: Date.now,
  },
});

const service = mongoose.model('Service', serviceSchema);

module.exports = service;
