const express = require("express");

const bodyParser = require("body-parser");

const server = express();

server.use(bodyParser.json());


const banks = []
 


const viewBanksController = (req, res) => {

}

const createBankController = (req, res) => {

}

const updateBankController = (req, res) => {

}

const deleteBankController = (req, res) => {

}

server.get('/bank', viewBanksController)
server.post('/bank', createBankController)
server.put('/bank', updateBankController)
server.delete('/bank', deleteBankController)

server.listen(3000, () => console.log('all systems are go!');)