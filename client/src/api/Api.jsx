const baseUrl = 'http://localhost:8080/api/v1/elite'

// Auth /auth/register-admin
export const loginUrl = `${baseUrl}/auth/login`
export const registerAdminUrl = `${baseUrl}/auth/register-admin`
export const registerUrl = `${baseUrl}/auth/register`
export const forgotPassUrl = (email) => `${baseUrl}/auth/forgot-password/${email}`

// Airline Bookings
export const createAirlineBooksUrl = `${baseUrl}/airline-booking`
export const getBookingsByPassIdUrl = (passengerId) => `${baseUrl}/airline-booking/${passengerId}`
export const getBookingsByTicketIdUrl = (ticketId) => `${baseUrl}/airline-booking/${ticketId}`
export const getBookingsByIdUrl = (id) => `${baseUrl}/airline-booking/${id}`

// Ticket
export const createTicketUrl = (adminId) => `${baseUrl}/ticket/${adminId}`
export const getTicketByIdUrl = (ticketId) => `${baseUrl}/ticket/${ticketId}`
export const getAllTicketUrl =(adminId) => `${baseUrl}/ticket/admin/${adminId}`
export const updateTicketUrl = (adminId) => `${baseUrl}/ticket/admin/${adminId}`

// User
export const getUserByIdUrl = (userId) => `${baseUrl}/user/userId/${userId}`
export const getUserByEmailUrl = (email) => `${baseUrl}/user/${email}`

// Airline Enquiry
export const createAirlineEnquiryUrl = `${baseUrl}/airline-enquiry`
export const findEnquiryByIdUrl = (enquiryId) =>`${baseUrl}/airline-enquiry/${enquiryId}`
export const getAllEnquiry = `${baseUrl}/airline-enquiry`
export const deleteEnquiryByIdUrl = (enquiryId) =>`${baseUrl}/airline-enquiry/${enquiryId}`
