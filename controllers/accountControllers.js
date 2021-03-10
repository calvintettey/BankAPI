//Controllers
const AccountModel = require("../models/accountModel");
const { validationResult } = require("express-validator");

const createAccountController = async (req, res) => {
  const { accountName, accountNumber, accountType, bankId } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const account = await new AccountModel({
      accountName,
      accountNumber,
      accountType,
      bankId,
    }).save();
    res.status(201).json({ message: "Account created", data: result });
  } catch(error){
    res.status(500).json({ message: "Failed to create account", error: error });
  }
  
};

const viewAccountController = (req, res) => {
  AccountModel.find()
    .populate("bankId", "name, location, branch")
    .then((account) => {
      res.json({ data: accounts });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  createAccountController,
  viewAccountController,
};
