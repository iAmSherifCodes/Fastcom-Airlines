/* eslint-disable no-undef */
const Router = require('express').Router()
const AuthController = require('../controller/auth.controller');
const AirlineBookingCont = require('../controller/airline.booking.controller')
const TicketController = require('../controller/ticket.controller')
const UserController = require('../controller/user.controller')

// Auth
Router.post('/auth/login', AuthController.login);
Router.post('/auth/register', AuthController.register)
Router.post('/auth/register-admin', AuthController.registerAdmin)
Router.post('/auth/forgot-password/:email', AuthController.forgotPassword)

// Airline Bookings
Router.post('/airline-booking', AirlineBookingCont.createBooking)
Router.get('/airline-booking/:passengerId', AirlineBookingCont.getBookingByPassId)
Router.get('/airline-booking/:ticketId', AirlineBookingCont.getBookingByTicketId)
Router.get('/airline-booking/:id', AirlineBookingCont.getBookingById)

// Tickets

Router.post('/ticket/:adminId', TicketController.createTicket)
Router.get('/ticket/:ticketId', TicketController.getTicketById)
Router.get('/ticket/admin/:adminId', TicketController.getAllTicket)
Router.put('/ticket/admin/:adminId', TicketController.updateTicket)

// User

Router.post('/user', UserController.createUser)
Router.get('/user/:email', UserController.getUserByEmail)
Router.get('/user/userId/:userId', UserController.getUserById)

// //Airline Enquiry

// Router.post('/airline-enquiry', AirlineEnquiryController.createAirlineEnquiry)
// Router.get('/airline-enquiry/:enquiryId', AirlineEnquiryController.findEnquiryById)
// Router.get('/airline-enquiry', AirlineEnquiryController.getAllEnquiry)
// Router.delete('/airline-enquiry/:enqiuryId', AirlineEnquiryController.deleteEnquiryById)

module.exports = Router