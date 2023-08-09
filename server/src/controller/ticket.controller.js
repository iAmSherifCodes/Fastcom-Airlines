/* eslint-disable no-undef */
const TicketService = require('../service/ticketService')

const createTicket = async (req, res) => {
    const { adminId } = req.params
    await TicketService.createTicket(req.body, adminId)
    .then((response)=> res.json(response))
    .catch((error)=> res.json(error))
}

const updateTicket = async (req, res) => {
    const { adminId } = req.params
    await TicketService.updateTicket(req.body, adminId)
    .then((response)=> res.json(response))
    .catch((error)=> res.json(error))
}

const getAllTicket = async (req, res) => {
    const { adminId } = req.params
    await TicketService.getAllTicket(adminId)
    .then((response)=> res.json(response))
    .catch((error)=> res.json(error))
}

const getTicketById = async (req, res) => {
    const { ticketId } = req.params
    await TicketService.getTicketById(ticketId)
    .then((response)=> res.json(response))
    .catch((error)=> res.json(error))
}

module.exports = { createTicket, updateTicket, getAllTicket, getTicketById }