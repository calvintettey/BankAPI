//Bank Model
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

  static delete({ name }) {
    let deletedBank = null;
    banksDB = banksDB.filter((bank) => {
      if (bank.name !== name) {
        return true;
      }
      deletedBank = bank;
      return false;
    });

    return deletedBank;
  }
}

module.exports = BankModel;