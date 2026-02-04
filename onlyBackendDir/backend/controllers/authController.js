const User = require("../models/User");

exports.register = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send("User registered, waiting for approval");
};
