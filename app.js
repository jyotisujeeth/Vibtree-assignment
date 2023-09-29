const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const sendSms = require("./twilio");
const dotenv = require("dotenv");
dotenv.config();

var cors = require("cors");
app.use(cors());

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const port = 5000;

app.post("/sms", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.post("/call", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.post("/whatsapp", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Welcome!</h1>");
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
