/* eslint-disable no-undef */
const mongoose = require('mongoose');
const { Roles } = require('../common/Roles');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    _id: {
      type: String
    },
    userName: {
      type: String,
      unique: true
    },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    email: {
      type: String,
      unique: true
    },
    phoneNumber: {
      type: String,
      unique: true
    },
    password: {
      type: String
    },
    role: {
      type: String,
      default: Roles.Passengers
    },
    verifiedEmail: {
      type: Boolean,
      default: false
    },
    emailVerificationToken: {
      type: String
    },
    resetPasswordToken: {
      type: String
    },
    resetPasswordTokenExpiry: {
      type: Date
    },
  },
  { timestamps: true }
);

userSchema.pre('save', async function () {
    if (!this._id) {
        this._id = new mongoose.Types.ObjectId().toString();
      } 
});
  
const User = mongoose.model('User', userSchema);

module.exports = User;