// index.js

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const otpdigit = require('./otp');
const router = express.Router();
const User = require('../../user')

const otpRoute = express();


// Body parser middleware
otpRoute.use(bodyParser.json());
otpRoute.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bhardadivyesh9@gmail.com',
    pass: 'cdgn pjcx fjqq nneg'
  }
});

otpRoute.post('/otp', async(req, res) => {
  const { email } = req.body;
if (!email) {
  return res.status(400).json({ error: 'Email is required' });
}
function generateOTP() {
  let otp = '';
  for (let i = 0; i < 6; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  return otp;
}
const otp = generateOTP();
try {
  let existingUser = await User.findOne({ email });
  if (existingUser) {
    // If user exists, update the OTP
    existingUser.otp = otp;
    await existingUser.save();
    return res.json({ status: 'OK', message: 'OTP updated successfully', user: existingUser });
  } else {
    // If user doesn't exist, create a new user
    const newUser = new otpdigit({ email, otp });
    await newUser.save();
    return res.json({ status: 'OK', message: 'User registered successfully', user: newUser });
  }
} catch (error) {
  console.error('Error registering user:', error);
  res.status(500).json({ error: 'Internal server error' });
}

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bhardadivyesh9@gmail.com',
      pass: 'cdgn pjcx fjqq nneg'
    }
  });
  const mailOptions = {
    from: 'bhardadivyesh9@gmail.com',
    to: email,
    subject: 'Your OTP',
    text: `Your OTP is: ${otp}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending OTP:', error);
      res.status(500).json({ error: 'Failed to send OTP' });
    } else {
      console.log('Email sent:', info.response);
      res.json({ success: true, message: 'OTP sent successfully' });
    }
  });
});
otpRoute.post('/verifyOtp',async (req,res)=>{
  const {email,otp} = req.body;
  try {
    let existingUser = await User.findOne({ email });
    if (existingUser) {
     if(email == existingUser.email && otp == existingUser.otp){
      console.log(res.status(200).json({success : "otp verified successfully"}));
     }
     else{
      console.log(res.status(404).json({error : "Invalid email"}));
     }
    }
  } catch (error) {
   
    res.status(500).json({ error: 'Internal server error' });
  }
}) 

module.exports = otpRoute;