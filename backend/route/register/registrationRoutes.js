const express = require('express');
const router = express.Router();
const User = require('../../user');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');

// post data into the database
router.post('/post-user-registration', async(req, res) => {
    const { email, name,ConfirmPassword,address,city,contactno1,contactno2,gender,password,photo,state,userId } = req.body;
    const role = {
      client : true,
      admin : false,
    }
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ status:'FAILED',message: 'Email is already Registered' });
        }
        const newUser = new User({  email, name,ConfirmPassword,address,city,contactno1,contactno2,gender,password,photo,state,userId,role });
        await newUser.save();
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
          subject: 'Welcome to our app',
          text: 'You are Registered successfully on the mobile shop app enjoy and explore the app.'
        };
        
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error('Error:', error);
          } else {
            // console.log('Email sent:', info.response);
          }
        });
        res.json({status:'OK', message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
    });
  // get data into the nodejs
router.get('/get-user-registration', async (req, res) => {
    try {
      let users = await User.find().select('-password');
      res.status(200).json(users);
    } catch (error) {
      
      res.status(500).json({ error: 'Internal Server Error' }); 
    }
  });
router.delete('/delete-user-registration', async (req, res) => {
    try {
      const userEmail = req.body.email; // Assuming the email is sent in the request body
      let deletedUser = await User.findOneAndDelete({ email: userEmail });
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(deletedUser);
      
    } catch (error) {
      
      res.status(500).json({ error: 'Internal Server Error' }); // Sending error response if something goes wrong
    }
  });
  // put request
router.put('/put-user-registration', async (req, res) => {
    try {
      const userEmail = req.body.email; 
      const newData = req.body; 
      
      let updatedUser = await User.findOneAndUpdate({ email: userEmail }, newData, { new: true });
      if (!updatedUser) {
          return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(updatedUser);
  } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' }); 
  }
  });
  // Route for user login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      if (user.email == email && user.password == password) {
        const userData = { ...user.toObject() };
        delete userData.password
        res.json({ success: true, loginData : userData });
      } else {
        // Passwords do not match, login failed
        res.json({ success: false, error: 'Incorrect email or password.' });
      }
    } else {
      // User not found, login failed
      res.json({ success: false, error: 'User not found.' });
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

module.exports = router;