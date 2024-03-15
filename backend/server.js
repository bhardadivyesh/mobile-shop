const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const User = require('./user')
const nodemailer = require('nodemailer');



const cors = require("cors")
const app = express();
app.use(cors())
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bhardadivyesh@gmail.com',
    pass: '123456'
  }
});

mongoose.connect('mongodb+srv://testUser:II326v46vW7mulyx@cluster0.cyvyuf0.mongodb.net/demo_auth?retryWrites=true&w=majority')

// post data into the database
app.post('/registration', async(req, res) => {
  const { email, name,ConfirmPassword,address,city,contactno1,contactno2,gender,password,photo,state,userId } = req.body;
  console.log(req.body);
  try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
          return res.json({ status:'FAILED',message: 'Email is already Registered' });
      }
      const newUser = new User({  email, name,ConfirmPassword,address,city,contactno1,contactno2,gender,password,photo,state,userId });
      await newUser.save();
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'bhardadivyesh9@gmail.com',
          pass: 'cdgn pjcx fjqq nneg'
        }
      });
      console.log(email);
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
          console.log('Email sent:', info.response);
        }
      });
      res.json({status:'OK', message: 'User registered successfully', user: newUser });
  } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
  });
// get data into the nodejs
app.get('/registration', async (req, res) => {
  try {
    let users = await User.find();
    res.status(200).json(users);
    console.log(users);
  } catch (error) {
    
    res.status(500).json({ error: 'Internal Server Error' }); 
  }
});
app.delete('/registration', async (req, res) => {
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
app.put('/registration', async (req, res) => {
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

// Start the server
const port = 3000;
app.listen(port, async () => {
  
  console.log(`Server is running on http://localhost:${port}`);
});
