/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const airlineBookingSchema = new Schema(
  {
    _id: {
      type: String
    },
    passengerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    ticketId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ticket',
    },
    description: {
      type: String
    },
  },
  { timestamps: true }
);

airlineBookingSchema.pre('save', async function (next) {
  try {
    if (!this._id) {
      this._id = new mongoose.Types.ObjectId().toString();
    }

    if (!this.isModified('password')) {
      return next();
    }
    return next();
  } catch (error) {
    return next(error);
  }
});
  
const AirlineBooking = mongoose.model('AirlineBooking', airlineBookingSchema);

module.exports = AirlineBooking;