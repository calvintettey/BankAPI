const express = require("express");

const bodyParser = require("body-parser");

const server = express();

server.use(bodyParser.json());

let banksDB = [];

class BankModel {
  constructor({ name, location, branch, phone, address, accountNumber }) {
    this.name = name;
    this.location = location;
    this.branch = branch;
    this.phone = phone;
    this.address = address;
    this.accountNumber = accountNumber;
  }

  save() {
    banksDB.push(this);
    return this;
  }

  static all() {
    return banksDB;
  }

  static update(updatedInfo = {}) {
    banksDB.map((bank) => {
      if (bank.name === updatedInfo.name) {
        return { ...bank, ...updatedInfo };
      }

      return bank;
    });
  }
}

const viewBanksController = (req, res) => {
  const banks = BankModel.all();
  res.json({ data: banks });
};

const createBankController = (req, res) => {
  const { name, location, branch, phone, address, accountNumber } = req.body;

  const bank = new BankModel({
    name,
    location,
    branch,
    phone,
    address,
    accountNumber,
  });

  bank.save();

  res.json({ message: "create successful", data: bank });
};

const updateBankController = (req, res) => {
  const { name, location, branch, phone, address, accountNumber } = req.body;

  const updatedBank = BankModel.update({
    name,
    location,
    branch,
    phone,
    address,
    accountNumber,
  });

  res.json({ maessage: "update successful", data: updatedBank });
};

const deleteBankController = (req, res) => {};

server.get("/bank", viewBanksController);
server.post("/bank", createBankController);
server.put("/bank", updateBankController);
server.delete("/bank", deleteBankController);

server.listen(3000, () => console.log("all systems are go!"));
