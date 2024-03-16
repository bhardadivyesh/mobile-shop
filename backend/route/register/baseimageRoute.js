const express = require('express');
const router = express.Router();
const baseImage = require('../../baseImage');


// post data into the database
router.post('/baseImage', async(req, res) => {
    const {photo } = req.body;
    console.log(req.body);
    try {
      
        const newUser = new baseImage({photo});
        await newUser.save();
        res.json({status:'OK', message: 'User registered', user: newUser });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
    });

module.exports = router;