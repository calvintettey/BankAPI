//Bank Model

const mongoose = require("mongoose");
const { Schema } = mongoose;

const Schema = mongoose.Schema;
const bankSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  accountNumber: {
    type: String,
    required: true,
  },
accounts: [
  {
    accountId: {required: true, type:Schema.Types.ObjectId, ref: "Account"}
  }
]
}
});

const Bank = mongoose.model("Bank", bankSchema);

module.exports;

// let banksDB = [];

// class BankModel {
//   constructor({ name, location, branch, phone, address, accountNumber }) {
//     this.name = name;
//     this.location = location;
//     this.branch = branch;
//     this.phone = phone;
//     this.address = address;
//     this.accountNumber = accountNumber;
//   }

//   save() {
//     banksDB.push(this);
//     return this;
//   }

//   static all() {
//     return banksDB;
//   }

//   static update(updatedInfo = {}) {
//     banksDB.map((bank) => {
//       if (bank.name === updatedInfo.name) {
//         return { ...bank, ...updatedInfo };
//       }

//       return bank;
//     });
//   }

//   static delete({ name }) {
//     let deletedBank = null;
//     banksDB = banksDB.filter((bank) => {
//       if (bank.name !== name) {
//         return true;
//       }
//       deletedBank = bank;
//       return false;
//     });

//     return deletedBank;
//   }
// }

//module.exports = BankModel;
