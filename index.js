const express = require("express");

const bodyParser = require("body-parser");

const server = express();

server.use(bodyParser.json());


const banksDB = []


class BankModel {
    constructor({name, location, branch, phone, address, accountNumber}){
        this.name = name
        this.location = location
        this.branch = branch
        this.phone = phone
        this.address = address
        this.accountNumber = accountNumber
    }

    save(){
        banksDB.push(this)
        return this
    }
}
 


const viewBanksController = (req, res) => {

}

const createBankController = (req, res) => {
    const {name, location, branch, phone, address, accountNumber} = req.body

    const bank = BankModel({name, location, branch, phone, address, accountNumber})

    bank.save()

    res.json({message: "create successful", data: bank})
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