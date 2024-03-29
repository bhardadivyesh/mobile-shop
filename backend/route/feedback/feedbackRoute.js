const express = require("express");
const router = express.Router();
const feedbackModel = require("./feedback");

router.post("/post-feedback", async (req, res) => {
  const { name, number, email, feedbackData } = req.body;
  try {
    const feedbacks = new feedbackModel({ name, number, email, feedbackData });
    await feedbacks.save();
    res.json({ status: "OK", message: "feedback send successfully" });
  } catch (error) {
    console.error("Error feedback:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.get("/get-feedback", async (req, res) => {
  try {
    let feedbacks = await feedbackModel.find();
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.delete('/delete-feedback', async (req, res) => {
  try {
    const userEmail = req.body.email; 

    let deletedUser = await feedbackModel.findOneAndDelete({ email: userEmail });

    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(deletedUser);
    
  } catch (error) {
    
    res.status(500).json({ error: 'Internal Server Error' }); // Sending error response if something goes wrong
  }
});

module.exports = router;
