/* eslint-disable no-undef */
const twilio = require('twilio')
const crypto = require('crypto');

function generateResetToken() {
  return crypto.randomBytes(20).toString('hex');
}

function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
}

async function sendOTP(phoneNumber) {
    const otp = generateOTP();
  
    try {
      const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  
      const message = await client.messages.create({
        body: `Your OTP for verification is: ${otp}`,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: phoneNumber,
      });
      console.log('OTP Sent successfully:', message.sid);
    } catch (error) {
      console.error('Error sending OTP:', error.message);
      throw new Error('Error sending OTP');
    }
}

module.exports = { generateOTP, sendOTP, generateResetToken }
