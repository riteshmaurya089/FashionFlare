const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization
  // console.log('token: ', token);
  if (token) {
    try {
      const decoded = jwt.verify(token, "fashionflare");
      req.body.userid = decoded.userid;
      next();
    } catch (err) {
      res.status(400).send({ msg: "Please Login First" });
    }
  } else {
    res.status(400).send({ msg: "Please Login First" });
  }
};

module.exports = { auth };