/* eslint-disable no-undef */
const AirlineBooking = require('../service/airlineBookingsService')

const createBooking = async(req, res) => {
    await AirlineBooking.createAirlineBooking(req.body)
    .then((response)=> res.json(response))
    .catch((error) => res.json(error))
}

const getBookingByPassId = async (req, res) => {
    const { passengerId } = req.params
    await AirlineBooking.findBookingByPassengerId(passengerId)
    .then((response)=> res.json(response))
    .catch((error) => res.json(error))
}

const getBookingByTicketId = async (req, res) => {
    const { ticketId } = req.params
    await AirlineBooking.findBookingByTicketId(ticketId)
    .then((response)=> res.json(response))
    .catch((error) => res.json(error))
}

const getBookingById = async (req, res) => {
    const { id } = req.params
    await AirlineBooking.findBookingById(id)
    .then((response)=> res.json(response))
    .catch((error) => res.json(error))
}

module.exports = { createBooking, getBookingByPassId, getBookingByTicketId, getBookingById }