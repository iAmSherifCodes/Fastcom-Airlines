const AirlineEnquiry = require("../models/airline.enquiry")


const createAirlineEnquiry = async (req, res) =>{
    await AirlineEnquiry.createAirlineEnquiry(req.body)
    .then((response) => res.json(response))
    .catch((error) => res.json(error));
}

const findEnquiryById = async (req, res)=>{
    const { airlineEnquiryId } = req.params;
    await AirlineEnquiry.findEnquiryById(airlineEnquiryId)
    .then((response)=> res.json(response))
    .catch((error) => res.json(error));
}

const getAllEnquiry = async (req, res) => {
    await AirlineEnquiry.getAllEnquiry(req.body)
    .then((response) => res.json(response))
    .catch((error) => res.json(error))
}

const deleteEnquiryById = async (req, res) => {
    const { enquiryId } = req.params;
    await AirlineEnquiry.deleteEnquiryById(enquiryId)
    .then((response) => res.json(response))
    .catch((error) => res.json(error))
}

module.exports = {
  createAirlineEnquiry,
  findEnquiryById,
  getAllEnquiry,
  deleteEnquiryById,
};