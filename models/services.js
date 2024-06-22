const mongoose = require('mongoose');
// add id
const serviceSchema = new mongoose.Schema({
  services: {
    title: { type: String, required: true },
    Description: { type: String, required: true },
    Price: { type: mongoose.Schema.Types.Decimal128, required: true },
    Images: { type: Buffer, required: true },
    Tags: { type: String, required: true },
  },
});

const service = mongoose.model('Service', serviceSchema);

module.exports = service;
