const express = require('express');
const app = express();
const port = 3000;
const connect = require('./database/mongoDb')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
require("dotenv").config();

const studentRoutes = require('./routes/student.routes')
app.use(cookieParser())
app.use(express.json());
app.use(bodyParser.json())


app.use('/student',studentRoutes)


app.get('/', (req, res) => {
  res.send('Hello World! check');
});



app.listen(port, () => {
  connect()
  console.log(`Example app listening at http://localhost:3000`);
});