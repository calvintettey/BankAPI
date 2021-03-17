//Controllers
const UserModel = require("../models/userModel");
const { validationResult } = require("express-validator");

const createUserController = async (req, res) => {
  const { userName, email, password, accounts } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const user = await new UserModel({
      userName,
      email,
      password,
      accounts,
    }).save();
    res.status(201).json({ message: "User created!", data: result });
  } catch (error) {
    res.status(500).json({ message: "Failed to create user", error: error });
  }
};

const viewUserController = (req, res) => {
  UserModel.find()
    .populate("account", "userName, email, password")
    .then((users) => {
      res.json({ data: users });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  createUserController,
  viewUserController,
};
