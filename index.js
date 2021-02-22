const express = require("express");

const bodyParser = require("body-parser");

const BankModel = require("./model");

const [
  viewBanksController,
  createBankController,
  updateBankController,
  deleteBankController,
] = require("./controllers");

const server = express();

server.use(bodyParser.json());

server.get("/bank", viewBanksController);
server.post("/bank", createBankController);
server.put("/bank", updateBankController);
server.delete("/bank", deleteBankController);

server.listen(3000, () => console.log("all systems are go!"));
