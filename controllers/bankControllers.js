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

module.exports = {
  viewBanksController,
  createBankController,
  updateBankController,
  deleteBankController,
};
