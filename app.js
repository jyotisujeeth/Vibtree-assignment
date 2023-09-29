const express = require("express");
const cors = require("cors");
require("dotenv").config();
const sendsms = require("./routes/index");

const app = express();

app.use(express.json());
app.use(sendsms);
app.use(cors());

//start the server
app.listen(5000, () => {
  console.log("app started at 5000");
});
