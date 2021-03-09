//Controllers
const BankModel = require("../models/bankModel");

const viewBanksController = async (req, res) => {
  const banks = await BankModel.find();
  res.json({ data: banks });
};

const createBankController = async (req, res) => {
  const { name, location, branch, phone, address, accountNumber } = req.body;

  const bank = await new BankModel({
    name,
    location,
    branch,
    phone,
    address,
    accountNumber,
  }).save();

  res.json({ message: "create successful", data: bank });
};

const updateBankController = (req, res) => {
  const {
    id,
    name,
    location,
    branch,
    phone,
    address,
    accountNumber,
  } = req.body;

  BankModel.findById(id)
    .then((bank) => {
      if (bank) {
        bank.name = name;
        bank.location = location;
        bank.branch = branch;
        bank.phone = phone;
        bank.address = address;
        bank.accountNumber = accountNumber;

        bank[0].save();

        res.json({ message: "Document cannot be found" });
      }

      res.json({ maessage: "update successful", data: updatedBank });
    })
    .catch((err) => console.log(err));
};

const deleteBankController = (req, res) => {
  const { id } = req.body;
  BankModel.findByIdAndRemove(id).then((deletedBank) => {
    if (deletedBank) {
      AccountModel.deleteMany({ bankId: deletedBank._id })
        .then((result) => {
          res.json({ message: "bank not found" });
        })
        .catch((err) => console.log(err));
      res.json({ message: "bank deleted", data: deletedBank });
      return;
    }
  });
};

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
  viewBanksController,
  createBankController,
  updateBankController,
  deleteBankController,
  createAccountController,
  viewAccountController,
};
