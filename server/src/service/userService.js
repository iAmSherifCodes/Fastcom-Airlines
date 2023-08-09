/* eslint-disable no-undef */
const { hashPassword } = require('../common/validator');
const { NotFoundException } = require('../exceptions/NotFoundException');
const User = require('../models/user')
const Role = require('../common/Roles')

const createUser = async(request) => {
    const { firstName, lastName, password, email, userName, phoneNumber } = request;

    const user = await User.findOne({email})

    if(user !== null){
        throw new NotFoundException('User already exist');
    }

    const hashedPassword = await hashPassword(password);

    const newUser = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
        userName: userName,
        phoneNumber: phoneNumber,
    })

    const savedUser = await newUser.save()
    const response = {
        _id: savedUser._id,
        userName: savedUser.userName,
        firstName: savedUser.firstName,
        lastName: savedUser.lastName,
        email: savedUser.email,
        role: savedUser.role, 
    }

    return {
        data: response,
        message: 'User Created Successfully'
    }
}

const createAdmin = async(request) => {
    const { firstName, lastName, password, email, userName, phoneNumber } = request;

    const user = await User.findOne({email})

    if(user !== null){
        throw new NotFoundException('User already exist');
    }

    const hashedPassword = await hashPassword(password);

    const newAdmin = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
        userName: userName,
        phoneNumber: phoneNumber,
        role: Role.Roles.Admin
    })

    const savedAdmin = await newAdmin.save()
    const response = {
        _id: savedAdmin._id,
        userName: savedAdmin.userName,
        firstName: savedAdmin.firstName,
        lastName: savedAdmin.lastName,
        email: savedAdmin.email,
        role: savedAdmin.role, 
    }

    return {
        data: response,
        message: 'Admin Created Successfully'
    }
}

const findUserByEmail = async (email)=> {
    const user = await User.findOne({email})

    return{
        data: user,
        message: 'Successfully Retrieved',
    }
}

const findUserById = async (userId)=> {
    const user = await User.findOne({_id: userId})

    return{
        data: user,
        message: 'Successfully Retrieved',
    }
}
module.exports = { createUser, findUserByEmail, findUserById, createAdmin }
