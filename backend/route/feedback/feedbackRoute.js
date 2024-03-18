const express = require("express");
const router = express.Router();
const feedbackModel = require("./feedback");

router.post("/post-feedback", async (req, res) => {
  const { name, number, email, feedbackData } = req.body;
  try {
    const feedbacks = new feedbackModel({ name, number, email, feedbackData });
    await feedbacks.save();
    res.json({ status: "OK", message: "feedback send successfully" });
    console.log(res.message);
  } catch (error) {
    console.error("Error feedback:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.get("/get-feedback", async (req, res) => {
  try {
    let feedbacks = await feedbackModel.find();
    console.log(feedbacks);
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
