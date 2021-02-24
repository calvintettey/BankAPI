const express = require("express");

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const BankModel = require("./models/bankModel");

const bankRoutes = require("./routes/bankRoutes")


const server = express();

mongoose.connect(
  "mongodb+srv://calvin:<4K8mTGwUKBnqbG5>@cluster0.jm1ye.mongodb.net/BankAPI?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

server.use(bodyParser.json());

server.use(bankRoutes)

server.listen(3000, () => console.log("all systems are go!"));
