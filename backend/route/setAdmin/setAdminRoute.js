const express = require("express");
const router = express.Router();
// const setAdmin = require('./setAdmin')
const User = require('../user')

router.put('/setAdminRole', async (req, res) => {
  try {
    const userEmail = req.body.email;
    console.log(userEmail);
    const newRole = {
      client: false,
      admin: true,
    };
    let updatedUser = await User.findOneAndUpdate(
      { email: userEmail },
      { role: newRole },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
