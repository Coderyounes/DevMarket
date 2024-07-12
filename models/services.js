const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 10,
    max: 100,
  },
  description: {
    type: String,
    required: true,
    min: 200,
    max: 1000,
  },
  price: {
    type: Number,
    required: true,
  },
  images: {
    type: Buffer,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
  freelance: { type: mongoose.Schema.Types.ObjectId, ref: 'freelances' },
}, {
  timestamps: true,
}, {
  toJSON: { virtuals: true },
});

serviceSchema.virtual('photoUrl').get(function() {
  if (this.photo) {
    return `data:image/jpeg;base64,${this.photo.toString('base64')}`;
  }
});

const service = mongoose.model('Service', serviceSchema);

module.exports = service;
