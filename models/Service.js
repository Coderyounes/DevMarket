const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    freelancer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Freelancer",
      required: true,
    },
    title: {
      type: String,
      required: true,
      min: 10,
      max: 100,
    },
    description: {
      type: String,
      required: true,
      min: 20,
      max: 1000,
    },
    price: {
      type: Number,
      required: true,
    },
    showCaseImage: {
      type: Buffer,
      required: true,
    },
    tags: {
      type: String,
      required: true,
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
        required: true,
      },
    ],
    contract: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Contract",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

serviceSchema.virtual("photoUrl").get(function () {
  if (this.photo) {
    return `data:image/jpeg;base64,${this.showCaseImage.toString("base64")}`;
  }
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
