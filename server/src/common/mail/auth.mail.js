/* eslint-disable no-undef */
const nodemailer = require('nodemailer');

function sendPasswordResetEmail(email, token) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'onyeukwuamara@gmail.com',
      pass: 'zlrchcpfxvgmunor',
    },
  });

  const resetPasswordLink = `http://localhost:3001/reset-password?token=${token}`;

  let mailOptions = {
    from: '"Precious Lois" <onyeukwuamara@gmail.com>',
    to: email, 
    subject: 'Password Reset Request',
    text: `You have requested a password reset. Click the link below to reset your password:\n\n${resetPasswordLink}`,
    html: `<p>You have requested a password reset. Click the link below to reset your password:</p><p><a href="${resetPasswordLink}">${resetPasswordLink}</a></p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email: ', error);
    } else {
      console.log('Email sent: ', info.response);
    }
  });
}

function sendEmailVerificationEmail(email, token) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'onyeukwuamara@gmail.com',
      pass: 'zlrchcpfxvgmunor',
    },
  });

  const verificationLink = `https://fendLink/verify-email?token=${token}`;

  let mailOptions = {
    from: '"Precious Lois" <onyeukwuamara@gmail.com>',
    to: email,
    subject: 'Email Verification',
    text: `Thank you for signing up. Please verify your email by clicking the link below:\n\n${verificationLink}`,
    html: `<p>Thank you for signing up. Please verify your email by clicking the link below:</p><p><a href="${verificationLink}">${verificationLink}</a></p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email: ', error);
    } else {
      console.log('Email sent: ', info.response);
    }
  });
}


module.exports = { sendPasswordResetEmail, sendEmailVerificationEmail }