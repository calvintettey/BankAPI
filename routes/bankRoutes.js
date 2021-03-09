// Routes
const express = require("express");
const router = express.Router();

const {
  viewBanksController,
  createBankController,
  updateBankController,
  deleteBankController,
  createAccountController,
  viewAccountController,
} = require("../controllers/bankControllers");

router.get("/bank", viewBanksController);
router.post("/bank", createBankController);
router.put("/bank", updateBankController);
router.delete("/bank", deleteBankController);

router.post('/accounts', createAccountController)
router.get('/accounts', viewAccountController)

module.exports = router;
