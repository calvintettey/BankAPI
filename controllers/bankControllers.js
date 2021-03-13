//Controllers
const BankModel = require("../models/bankModel");
const AccountModel = require("../models/accountModel");
const { validationResult } = require("express-validator");

const viewBanksController = async (req, res) => {
  const banks = await BankModel.find();
  res.json({ data: banks });
};

const createBankController = async (req, res) => {
  const { name, location, branch, phone, address } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const bank = await new BankModel({
      name,
      location,
      branch,
      phone,
      address,
    }).save();

    res.status(201).json({ message: "create successful", data: bank });
  } catch (error) {
    res.status(500).json({ message: "Failed to create account", error: error });
  }
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

module.exports = {
  viewBanksController,
  createBankController,
  updateBankController,
  deleteBankController,
};
