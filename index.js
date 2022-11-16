const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const connect = require("./database/mongoDb");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
// require("dotenv").config();
require("dotenv").config({ path: "config.env" });

const studentRoutes = require("./routes/student.routes");
const adminRoutes = require("./routes/admin.routes");
const careerServiceRoutes = require("./routes/careerService.routes");

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());

app.use("/student", studentRoutes);
app.use("/admin", adminRoutes);
app.use("/careerService", careerServiceRoutes);

app.get("/", (req, res) => {
  res.send("Hello World! check");
});

app.listen(port, () => {
  connect();
  console.log(`Example app listening at http://localhost:3000`);
});
