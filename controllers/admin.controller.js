const Admin = require("../models/admin.model");
const crypto = require("crypto");

const hashKey = process.env.HASH_KEY;

function adminRegister(req, res) {
  console.log(req.body);
  let date = new Date();
  req.body.password = crypto
    .createHash("sha256", hashKey)
    .update(req.body.password)
    .digest("hex");
  const newAdmin = new Admin({ ...req.body });
  console.log(newAdmin);
  newAdmin.save(function (err, newSavedAdmin) {
    if (err) {
      res.json({ message: "not registered", err: err }).status(200);
    } else {
      console.log({ newSavedAdmin });
      res.json({ message: "registered" }).status(200);
    }
  });
  // res.json({message:'here'}).status(200)
}

module.exports = { adminRegister };
