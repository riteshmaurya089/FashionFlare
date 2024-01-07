const express = require("express");
const { CartModel } = require("../models/cartModel");
const cartRoute = express.Router();
const jwt = require("jsonwebtoken");
const key = "fashionflare";

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  // console.log('authHeader: ', authHeader);
  if (!authHeader) {
    return res.status(400).json({ message: "Authorization header missing" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, key);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
// get route to get all data  

cartRoute.get("/", verifyToken, async (req, res) => {
  const userId = req.userId;
  try {
    const allCart = await CartModel.find({ userID: userId });
    // console.log('allCart: ', allCart);
    res.status(200).send(allCart);
  } catch (err) {
    // console.log(err);
    res.send(err);
  }
});


// post route to post data to cart 

cartRoute.post("/add", verifyToken, async (req, res) => {
  const userId = req.userId;
  // console.log('userId: ', userId);
  // const { name } = req.body;
  // console.log('name: ', req.body);
  try {
    const newProduct = { ...req.body, userID: userId };
    const cart = await new CartModel(newProduct);
    await cart.save();

  } catch (error) {
    res.send(error)
  }
});







//delete route to delete data from cart 
cartRoute.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params
    // console.log(req.body);
    await CartModel.findByIdAndDelete({ _id: id });
    // console.log("Data Deleted",);
    res.status(200).send("cart item deleted");

  } catch (err) {
    // console.log(err);
    res.send(err);
  }
});

// patch route to update cart data 
cartRoute.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const payload = req.body;

    await CartModel.findByIdAndUpdate({ _id: id }, payload);
    res.status(200).send("cart item updated");
  } catch (err) {
    // console.log(err);
    res.send(err);
  }
});


module.exports = { cartRoute };

