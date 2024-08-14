const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    usertype: {
      type: String,
      enum: ["freelancer", "employee"],
      required: true,
    },
    username: {
      type: String,
      match: /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
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
      min: 5,
      max: 100,
    },
    city: {
      type: String,
      min: 5,
      max: 50,
    },
    country: {
      type: String,
      required: true,
    },
    balance: {
      type: Number,
      default: 500,
    },
    birthDate: {
      type: Date,
      required: true,
    },
    profilePic: {
      type: Buffer,
    },
    firebaseUID: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    timestamps: true,
  }
);

UserSchema.virtual("photoUrl").get(function () {
  if (this.photo) {
    return `data:image/jpeg;base64,${this.profilePic.toString("base64")}`;
  }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
