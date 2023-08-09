/* eslint-disable no-undef */
const nodemailer = require('nodemailer');

async function sendWelcomeEmail(email) {
    console.log('hi i got here 1')
    let transporter = nodemailer.createTransport({
        // host: "smtp.zoho.com",
        // port: 465,
        // secure: true,
        service: 'gmail',
        auth: {
          user: 'onyeukwuamara@gmail.com',
          pass: 'zlrchcpfxvgmunor',
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    console.log('hi i got here 1.1', email)
    let mailOptions = {
      from: 'Precious Elite Flight <no-reply@onyeukwuamara@gmail.com>',
      to: email,
      subject: 'Welcome to Elite Flight!',
      text: 'Welcome to Elite Flight. We are excited to have you on board!',
      html: '<b>Welcome to Elite Flight. We are excited to have you on board!</b>',
    };
    console.log('hi i got here 2')
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email: ', error);
      } else {
        console.log('Email sent: ', info.response);
      }
    });
}

module.exports = { sendWelcomeEmail }