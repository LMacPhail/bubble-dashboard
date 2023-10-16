import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    id: String,
    creationDate: String,
    age: Number,
    hourlyRate: Number,
    sits: Number,
    latestReviewDate: String,
    reviewerCount: Number,
    dBSChecked: Boolean,
    verifiedDBS: Boolean,
    bubbleVerified: Boolean,
    idVerified: Boolean,
    referenceChecked: Boolean,
    hasProfileVideo: Boolean,
    oFSTEDRegistered: Boolean || null,
    newBornExperience: Boolean,
    hasUKDrivingLicense: Boolean || null,
    firstAidTrained: Boolean,
    specialNeedsExperience: Boolean,
    otherLanguagesSpoken: String,
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
