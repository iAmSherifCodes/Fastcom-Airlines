/* eslint-disable no-undef */
const mongoose = require('mongoose');
const { BookingType } = require('../common/booking.type');
const Schema = mongoose.Schema

const airlineEnquirySchema = new Schema({
    _id: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    type: {
        type: String,
        default: BookingType.ThirdClass
    },
}, {timestamps: true})

airlineEnquirySchema.pre('save', function (next){
    if(this._id === null || !this._id){
        this._id = new mongoose.Types.ObjectId().toString()
    }
    return next
})
const AirlineEnquiry = mongoose.model('AirlineEnquiry', airlineEnquirySchema);
module.exports = AirlineEnquiry