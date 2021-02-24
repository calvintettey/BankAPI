const express = require("express");

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const BankModel = require("./model");

const [
  viewBanksController,
  createBankController,
  updateBankController,
  deleteBankController,
] = require("./controllers");

const server = express();

mongoose.connect("mongodb+srv://calvin:<4K8mTGwUKBnqbG5>@cluster0.jm1ye.mongodb.net/BankAPI?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

server.use(bodyParser.json());

server.get("/bank", viewBanksController);
server.post("/bank", createBankController);
server.put("/bank", updateBankController);
server.delete("/bank", deleteBankController);

server.listen(3000, () => console.log("all systems are go!"));
