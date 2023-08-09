/* eslint-disable no-undef */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const passengerSchema = new Schema({
    _id: {
        type: String
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        type: String
    },
    password: {
        type: String
    },
}, {timeStamps: true})

passengerSchema.pre('save', function(){
    if(!this._id){
        this._id = new mongoose.Types.ObjectId().toString()
    }
})

const Passenger = mongoose.model('Passenger', passengerSchema)
module.exports = Passenger