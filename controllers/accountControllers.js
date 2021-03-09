//Controllers
const AccountModel = require("../models/accountModel");

const createAccountController = (req, res) => {
  const { name, number, accountType, bankId } = req.body;

  const account = new AccountModel({ name, number, accountType, bankId });

  account.save().then((result) => {
    if (result) res.json({ message: "Account created", data: result });
    else res.json({ message: "Failed to create account" });
  });
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