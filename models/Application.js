const mongoose = require("mongoose");

const jobappSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
      min: 20,
      max: 1000,
    },
    portfolio: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "under_review",
      enum: ["rejected", "under_review", "completed"],
      required: true,
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Application = mongoose.model("Application", jobappSchema);

module.exports = Application;
