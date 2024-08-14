const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      min: 10,
      max: 150,
    },
    description: {
      type: String,
      required: true,
      min: 50,
      max: 3000,
    },
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "published",
      enum: [
        "published",
        "in_progress",
        "completed",
        "on_hold",
        "un_published",
      ],
      required: true,
    },
    employer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    chosenFreelancer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    applications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "jobapplications",
      },
    ],
    tags: {
      type: String,
      required: true,
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    contract: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Contract",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Mission = mongoose.model("Mission", projectSchema);

module.exports = Mission;
