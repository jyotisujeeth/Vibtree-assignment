const user = require("../models/user");

const userDatabase = [];



exports.Postuser = async (req, res, next) => {
  try {
    const { password, phone } = req.body;
    if (isstringinvalid(password) || isstringinvalid(phone)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid phone number" });
    }
    const user = new user({
      phone: phone,
      password: password,
      userId: req.user,
    });
    expense.save();
    res
      .status(201)
      .json({ postUser, success: true, message: "user created successfully " });
  } catch {
    (err) => {
      return res.status(500).json({ success: false, error: err });
    };
  }
};


exports.getuser = async (req, res, next) => {
  try {
    const user = await Expense.find({ userId: req.user._id });

    res.status(200).json({ expenses, success: true });
  } catch (err) {
    res.status(500).json({ error: err, success: false });
  }
};
