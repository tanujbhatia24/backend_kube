
const facultyLogin = require('../models/faculty.model')
  
const crypto = require("crypto");
const hashKey = process.env.HASH_KEY;
const jwt = require("jsonwebtoken");
const jwtSecretKey = process.env.JWT_SECRET_KEY;
const facultyRegister = (req, res) => {
  req.body.password = crypto
    .createHash("sha256", hashKey)
    .update(req.body.password)
    .digest("hex");
  const { email } = req.body;
  facultyLogin.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "user already exist" });
    } else {
      const user = new facultyLogin({ ...req.body });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "sucessfull" });
        }
      });
    }
  });
};

module.exports = { facultyRegister };