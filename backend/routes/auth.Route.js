const key = "fashionflare";
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserModel } = require("../models/userModel");
const authRoute = express.Router();

authRoute.get("/", async (req, res) => {
  const data = await UserModel.find();
  res.send(data);
});


// Delete user by ID
authRoute.delete("delete/:id", async (req, res) => {
  try {
    const result = await UserModel.findByIdAndDelete(req.params.id);
    if (result) {
      res.send({ msg: "User deleted successfully" });
    } else {
      res.send({ msg: "User not found" });
    }
  } catch (e) {
    res.send({ msg: "Error deleting user" });
    // console.log(e);
  }
});

// Update user by ID
authRoute.patch("update/:id", async (req, res) => {
  try {
    const result = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (result) {
      res.send({ msg: "User updated successfully", user: result });
    } else {
      res.send({ msg: "User not found" });
    }
  } catch (e) {
    res.send({ msg: "Error updating user" });
    // console.log(e);
  }
});




// Route for user registration 
authRoute.post("/register", (req, res) => {
  const { email, name, password } = req.body

  try {
    const user = UserModel.find({ email })
    // console.log(user)
    if (user.length >= 1) {
      res.status(400).send({ "msg": "User already exist, please login" })
    }
    else {
      bcrypt.hash(password, 4, async (err, hash) => {
        const user = new UserModel({ email, name, password: hash });
        await user.save()
        res.status(200).send({ "msg": "new user added" })
      });

    }
  } catch (error) {
    res.status(400).send({ "msg": error.message })
  }

})


// Route for user authentication and token generation  
authRoute.post("/login",async (req, res) => {
  const { email, password } = req.body;
  const user =await  UserModel.findOne( {email});

  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  bcrypt.compare(password, user.password, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Server error" });
    }

    if (!result) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign({ id: user.id }, key);
    return res.json({ token ,firstname: user.name, email: user.email });
  });
});


module.exports = {
  authRoute,
};
