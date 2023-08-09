/* eslint-disable no-undef */
const AirlineBooking = require('../models/airlines.bookings')
const TicketService = require('../service/ticketService')
const UserService = require('../service/userService');
const { NotFoundException } = require('../exceptions/NotFoundException');


const createAirlineBooking = async (request) => {
    const { passengerId, ticketId, description } = request

    const ticket = await TicketService.getTicketById(ticketId)

    if(!ticket) throw new NotFoundException('Ticket not found')

    const user = await UserService.findUserById(passengerId);

    if(!user) throw new NotFoundException('User not found')

    const booking = new AirlineBooking({
        passengerId: passengerId,
        ticketId: ticketId,
        description: description,
    })

    const savedBooking = await booking.save()

    return {
        data: savedBooking,
        message: 'Passenger Flight Booking Successfully Created'
    }
}

const findBookingByPassengerId = async (userId) => {
    const user = await UserService.findUserById(userId);

    if(!user) throw new NotFoundException('User not found')

    const booking = await AirlineBooking.findOne({passengerId: user.data._id})

    if(!booking) throw new NotFoundException('Booking not found')

    return {
        data: booking,
        message: 'Bookings retrieved successfully'
    }
}

const findBookingByTicketId = async (ticketId) => {
    const ticket = await TicketService.getTicketById(ticketId)

    if(!ticket) throw new NotFoundException('Ticket not found')

    const booking = await AirlineBooking.findOne({ticketId: ticket.data._id})

    if(!booking) throw new NotFoundException('Booking not found')

    return {
        data: booking,
        message: 'Bookings retrieved successfully'
    }
}

const findBookingById = async (bookingId) => {
    const booking = await AirlineBooking.findOne({_id: bookingId})

    if(!booking) throw new NotFoundException('Booking not found')

    return {
        data: booking,
        message: 'Bookings retrieved successfully'
    }
}

module.exports = { createAirlineBooking, findBookingByPassengerId, findBookingByTicketId, findBookingById }