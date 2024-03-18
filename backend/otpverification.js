// index.js

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bhardadivyesh9@gmail.com',
    pass: 'cdgn pjcx fjqq nneg'
  }
});

// Generate and send OTP
app.post('/otp', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  // const otp = otpGenerator.generate(6, { digits: true });
  function generateOTP() {
    let otp = '';
    for (let i = 0; i < 6; i++) {
      otp += Math.floor(Math.random() * 10); // Generate random digit (0-9)
    }
    return otp;
  }
  
  // Example usage:
  const otp = generateOTP();
  console.log(otp);



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



const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
