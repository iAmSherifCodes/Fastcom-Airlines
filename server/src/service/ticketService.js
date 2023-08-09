/* eslint-disable no-undef */
const { NotFoundException } = require('../exceptions/NotFoundException');
const Ticket = require('../models/ticket');
const User = require('../models/user')

const createTicket = async (request, adminId)=> {
    console.log('ticket 2 --> ', request)
    const admin = await User.findOne({_id: adminId});
    console.log('ticket 2.1 --> ', admin)

    // if(admin){
    //     if(admin.role !== 'Admin'){
    //         throw new NotFoundException('This is not an Admin')
    //     }
    // } else {
    //     throw new NotFoundException('Admin not found')
    // }

    const { destination, from, description, date, time } = request;
    console.log('ticket 2 --> ', request)

    const ticket = new Ticket({
        destination: destination,
        description: description,
        from: from,
        date: date,
        time: time
    })

    const savedTicket = await ticket.save()
    console.log('ticket 2.1.1 --> ', savedTicket)

    const response = {
        date: savedTicket.date,
        destination: savedTicket.destination,
        description: savedTicket.description,
        from: savedTicket.from,
        time: savedTicket.time
    }

    console.log('ticket 3 --> ', response)

    return{
        data: response,
        message: 'Ticket created successfully'
    }
}

const getTicketById = async(ticketId) => {
    const ticket = await Ticket.findOne({_id: ticketId})

    if(!ticket) throw new NotFoundException('Ticket Not Found')

    return {
        data: ticket,
        message: 'Ticket retrieved successfully'
    }
}

const getAllTicket = async (adminId) => {
    const admin = await User.findById(adminId);
    if(admin){
        if(admin.role.toString().toLowerCase() !== 'Admin'.toLowerCase()){
            throw new NotFoundException('This is not an Admin')
        }
    } else {
        throw new NotFoundException('Admin not found')
    }

    const tickets = await Ticket.find()

    return{
        data: tickets,
        message: 'Tickets retrieved successfully'
    }
}

const updateTicket = async (request, adminId) => {
    const admin = await User.findById(adminId);
    if(admin){
        if(admin.role.toString().toLowerCase() !== 'Admin'.toLowerCase()){
            throw new NotFoundException('This is not an Admin')
        }
    } else {
        throw new NotFoundException('Admin not found')
    }

    const { _id, destination, description, date, time } = request
    const ticket = await Ticket.findOne({_id})
    if(ticket) {
        const updateTicket = await Ticket.updateOne({_id: _id}, { destination: destination, description: description, date: date, time: time }, {new: true} )

        return{
            data: updateTicket,
            message: 'Ticket updated successfully'
        }
    }
    else{
        throw new NotFoundException('Ticket does not exist')
    }
}

module.exports =  { createTicket, getAllTicket, updateTicket, getTicketById }