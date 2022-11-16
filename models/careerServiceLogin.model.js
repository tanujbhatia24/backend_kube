const mongoose = require("mongoose");
const { Schema } = mongoose;

let careerServiceLoginSchema = Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    userType: {
      type: String,
      default: "careerService",
    },
  },
  {
    collection: "careerServiceLoginInfo",
  }
);

const careerServiceLogin = mongoose.model("careerServiceLoginInfo", careerServiceLoginSchema);

module.exports = careerServiceLogin;
