const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  src: String,
  brand: String,
  category: String,
  title: String,
  discountPrice: String,
  orginalPrice: String,
  discount: String,
  offer: String,
  quantity: Number,
  userID: String,
});

const CartModel = mongoose.model("cart", cartSchema);

module.exports = { CartModel };
