const AirlineEnquiry = require("../models/airline.enquiry")
const { NotFoundException } = require("../exceptions/NotFoundException");


const createAirlineEnquiry = async (request) =>{
    const {title, description, type} = request;
    
    const airlineEnquiry = new AirlineEnquiry({
        title: title,
        description: description,
        type:type
    })

    const savedEnquiry = await airlineEnquiry.save()

    return{
        data: savedEnquiry,
        message: 'Your enquiry has been receievd'
    }
}

const findEnquiryById = async (enquiryId) =>{
    const airlineEnquiry = await AirlineEnquiry.findById({_id: enquiryId})

    if(!airlineEnquiry) throw new NotFoundException('Enquiry not found')

    return{
        data : airlineEnquiry
    } 
}

const getAllEnquiry = async ()=>{
    const allEnquiry = await AirlineEnquiry.find()
    if(!allEnquiry) throw new NotFoundException('No enquiry found')
    return{
        data:allEnquiry
    }
}

const deleteEnquiryById = async(enquiryId)=>{
    return await AirlineEnquiry.findByIdAndDelete({_id:enquiryId})
}

module.exports = {
  createAirlineEnquiry,
  findEnquiryById,
  deleteEnquiryById,
  getAllEnquiry,
};