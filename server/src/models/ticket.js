/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ticketSchema = new Schema({
    _id: {
        type: String
    },
    description: {
        type: String
    },
    from: {
        type: String
    },
    destination: {
        type: String
    },
    date: {
        type: String
    },
    time: {
        type: String
    },
}, 
{ timestamps: true }
)

ticketSchema.pre('save', async function (next){
    if(this._id === null || !this._id){
        this._id = await new mongoose.Types.ObjectId().toString()
    }
    return next
})
const Ticket = mongoose.model('Ticket', ticketSchema);
module.exports = Ticket