const mongoose = require("mongoose");

const contractSchema = new mongoose.Schema(
  {
    requirements: {
      type: String,
      min: 10,
      max: 4000,
      required: true,
    },
    aggreedPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "canceled", "ongoing", "rejected", "completed"],
      default: "pending",
      required: true,
    },
    startAt: {
      type: Date,
      required: true,
    },
    expireAt: {
      type: Date,
      required: true,
    },
    paymentGateway: {
      type: String,
      required: true,
    },
    employer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const contract = mongoose.model("contracts", contractSchema);

module.exports = contract;
