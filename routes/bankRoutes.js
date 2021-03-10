// Routes
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const {
  viewBanksController,
  createBankController,
  updateBankController,
  deleteBankController,
} = require("../controllers/bankControllers");

const {
  createAccountController,
  viewAccountController,
} = require("../controllers/accountControllers");

router.get("/bank", viewBanksController);
router.post("/bank", createBankController);
router.put("/bank", updateBankController);
router.delete("/bank", deleteBankController);

router.post(
  "/accounts",
  [
    body("accountName").not().isEmpty().withMessage("account name is required"),
    body("accountNumber")
      .not()
      .isEmpty()
      .withMessage("account number is required"),
    body("accountType").not().isEmpty().withMessage("account type is required"),
    body("bankId").not().isEmpty().withMessage("bank Id is required"),
  ],
  createAccountController
);
router.get("/accounts", viewAccountController);

module.exports = router;
