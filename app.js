const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();
const sendsms = require("./routes/index");
const app = express();

app.use(express.json());
app.use(sendsms);
app.use(cors());



app.listen(5000, () => {
  console.log("app started at 5000");
});
