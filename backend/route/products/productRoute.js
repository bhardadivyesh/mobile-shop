const express = require("express");
const router = express.Router();
const product = require("./product");

router.post("/post-products", async (req, res) => {
  let {billno, color, discount, maincategory, images, price, productdescription, productid, productname, purchasedate, purchasedetail, quantity, series, size, status, subcategory, } = req.body;
  let softDelete = false
  try {
    const newProduct = new product({
      billno,
      color,
      discount,
      maincategory,
      images,
      price,
      productdescription,
      productid,
      productname,
      purchasedate,
      purchasedetail,
      quantity,
      series,
      size,
      status,
      subcategory,
      softDelete
    });
    await newProduct.save();
    res.json({ status: "OK", message: "product add successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.get("/get-product", async (req, res) => {
  try {
    let users = await product.find({ softDelete: false });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.put('/put-product', async (req, res) => {
  try {
    const productName = req.body.data.productname; 
    const softDelete = true
    
    let updatedDeleteProduct = await product.findOneAndUpdate({ productname: productName },  { softDelete: softDelete }, { new: true });
    if (!updatedDeleteProduct) {
        return res.status(404).json({ error: 'Data not found' });
    }
    res.status(200).json(updatedDeleteProduct);
} catch (error) {
    res.status(500).json({ error: 'Internal Server Error' }); 
}
});


module.exports = router;
