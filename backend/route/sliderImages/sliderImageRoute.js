const express = require("express");
const router = express.Router();
const slider = require("./slider");

// post data into the database
// router.post("/post-imageSlider", async (req, res) => {
//   const { image1, image2, image3, image4 } = req.body;


//   try {

//     const images = new slider({ image1, image2, image3, image4 });
//     await images.save();
//     res.json({ status: "OK", message: "User registered successfully" });
//   } catch (error) {
//     console.error("Error registering user:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

  router.get('/get-imageSlider', async (req, res) => {
    try {
        let images = await slider.find();
        res.status(200).json(images);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.put('/put-imageSlider', async (req, res) => {
   try{
    const newImagesData = req.body;
    const updatedImages = await slider.findOneAndUpdate({}, { $set: newImagesData }, { new: true });
    if (!updatedImages) {
      return res.status(404).json({ error: 'image not found' });
  }
  // await updatedImages.save();
  res.status(200).json(updatedImages);
    

   }catch(error){
    res.status(500).json({error : "Internal Server Error"})
   }
  });
router.delete("/delete-imageSlider", async (req, res) => {
  try {
    const image1 = req.body.image1;
    let deletedImage = await slider.findOneAndDelete({ image1 });
    if (!deletedImage) {
      return res.status(404).json({ error: "image not found" });
    }
    res.status(200).json(deletedImage);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" }); // Sending error response if something goes wrong
  }
});

module.exports = router;
