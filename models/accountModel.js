//Account Model

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
  accountName: {
    type: String,
    required: true,
  },
  accountNumber: {
    type: String,
    required: true,
  },
  accountType: {
    type: String,
    required: true,
  },
  bankId: {
    type: Schema.Types.ObjectId,
    ref: "Bank",
    required: true,
  },
});

module.exports = mongoose.model("Account", AccountSchema);
