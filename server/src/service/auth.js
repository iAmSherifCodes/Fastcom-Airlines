/* eslint-disable no-undef */
const { comparePassword } = require('../common/validator');
const { NotFoundException } = require('../exceptions/NotFoundException');
const User = require('../models/user');
const UserService = require('./userService')
const jwt = require('jsonwebtoken');
const { sendEmailVerificationEmail, sendPasswordResetEmail } = require('../common/mail/auth.mail')
const { sendWelcomeEmail } = require('../common/mail/welcome.mail');
require('dotenv').config();
const { generateResetToken } = require('../common/typings')

async function save(request){
    const user = await UserService.createUser(request);
    
    const { _id, userName, email } = user.data
    const token = jwt.sign({_id, userName}, 'PrivateKey')
    await sendWelcomeEmail(email)
    
    return{
        token: token,
        message: user.message
    }
}

async function saveAdmin(request){
  const admin = await UserService.createAdmin(request);
  
  const { _id, userName, email } = admin.data
  const token = jwt.sign({_id, userName}, 'PrivateKey')
  await sendWelcomeEmail(email)
  
  return{
      token: {token, _id},
      message: admin.message
  }
}

async function login (request){
    const { password, email } = request

    const user = await UserService.findUserByEmail(email)
    
    console.log('hi hih hi user data --> ', user.data)

    if(!user){
        throw new NotFoundException('User Not Found');
    }

    const passwordDecode = await comparePassword(password, user.data.password)
    console.log('hi hih hi', passwordDecode)
    // const foundUser = await User.findOne({ passwordDecode })
    // console.log("Hi I got here login control --> ", foundUser)
    if(!passwordDecode){
        throw new NotFoundException('Invalid Password')
    }

    const { _id, userName } = user.data

    const token = jwt.sign({_id, userName}, 'PrivateKey')
    console.log('token --> ', token)

    return {
        data: {token, _id},
        message: 'User Successfully Retrieved',
    }
}

async function forgotPassword(email) {
    const user = await UserService.findUserByEmail(email);
    console.log('forgot user --> ', user.data)
  
    if (!user) {
      throw new NotFoundException('User Not Found');
    }
  
    const resetToken = generateResetToken();
    console.log('resetToken --> ', resetToken)
  
    await User.findByIdAndUpdate(user._id, {
      resetPasswordToken: resetToken,
      resetPasswordTokenExpiry: Date.now() + 3600000,
    });
    console.log('got to the end')
    sendPasswordResetEmail(user.data.email, resetToken);
  }


async function sendVerificationEmail(email) {
    const user = await UserService.findUserByEmail(email);
  
    if (!user) {
      throw new NotFoundException('User Not Found');
    }
  
    const verificationToken = generateVerificationToken();
  
    await User.findByIdAndUpdate(user._id, {
      emailVerificationToken: verificationToken,
      emailVerificationTokenExpiry: Date.now() + 3600000,
    });
  
    sendEmailVerificationEmail(user.email, verificationToken);
  }
module.exports = { save, saveAdmin, login, forgotPassword, sendVerificationEmail }