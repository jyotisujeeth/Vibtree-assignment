const express = require("express");

const router = express.Router();

// => get user number
router.get("/add-user", (req, res, next) => {
  res.send(
    '<form action="/user/add-user" method="POST"><input type="number" name="phoneNumber"><button type="submit">Add Number</button></form>'
  );
});
// userinformation
router.post("/user", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;

