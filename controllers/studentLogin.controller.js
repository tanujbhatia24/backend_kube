const Student = require("../models/student.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const hashKey = process.env.HASH_KEY;
const jwtSecretKey = process.env.JWT_SECRET_KEY;


const StudentLogin = (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  if (!email || !password) {
    console.log("Please fill all the details");
    res.send({ message: "Please fill all the details" });
  } else {
    Student.findOne({ email: email }, (err, result) => {
        if (result) {
            req.body.password = crypto.createHash("sha256", hashKey).update(req.body.password).digest("hex");
            if (req.body.password === result.password) {
                //create jwt token
                let data = {
                    email: req.body.email,
                    userType: req.body.userType,
                    time: Date(),
                };
                const jwtToken = jwt.sign(data, jwtSecretKey);
                let resultpayload = {
                    result: result,
                    token: jwtToken,
                };
                // console.log(resultpayload);
                res.send(resultpayload);
            } else {
                res.status(400).send("Wrong Password");
            }
        } else {
            res.send("Invalid User");
        }
    })
  }
};
module.exports = { StudentLogin };