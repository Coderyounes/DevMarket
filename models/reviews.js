const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  reviews: {
    name: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    rating: {
      type: Number, min: 0, max: 5, required: true,
    },
  },
});

const reviews = mongoose.model('Reviews', reviewSchema);

module.exports = reviews;
