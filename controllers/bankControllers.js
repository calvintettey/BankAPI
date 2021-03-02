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

  BankModel.findById(id).then((bank) => {
    if (bank) {
      bank.name = name;
      bank.location = location;
      bank.branch = branch;
      bank.phone = phone;
      bank.address = address;
      bank.accountNumber = accountNumber;

      bank[0].save();

      res.json({ message: "Document cannot be found"});
    }

  res.json({ maessage: "update successful", data: updatedBank });

  }).catch(err => console.log(err));

  // const updatedBank = BankModel.update({
  //   name,
  //   location,
  //   branch,
  //   phone,
  //   address,
  //   accountNumber,
  // });

  // res.json({ maessage: "update successful", data: updatedBank });
};

const deleteBankController = (req, res) => {
  const { name } = req.body;
  const deletedBank = BankModel.delete({ name });
  res.json({ message: "bank deleted", data: deletedBank });
};

module.exports = {
  viewBanksController,
  createBankController,
  updateBankController,
  deleteBankController,
};
