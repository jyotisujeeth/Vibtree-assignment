const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();
const sendsms = require("./routes/index");
// const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(sendsms);
app.use(cors());


// const User = require("./models/users");
// mongoose.set("strictQuery", false);
// mongoose
//   .connect("mongodb://localhost:27017/VibtreeTask", {
//     useNewUrlParser: true,
//     // useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
//   .then((result) => {
//     app.listen(5000);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//start the server
app.listen(5000, () => {
  console.log("app started at 5000");
});
