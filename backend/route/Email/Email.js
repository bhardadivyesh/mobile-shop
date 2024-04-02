const nodemailer = require('nodemailer');

const emailSender = {
    sendWelcomeEmail: function(email) {
        console.log(email);
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
    }
};

module.exports = emailSender;
