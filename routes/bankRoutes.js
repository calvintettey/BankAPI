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

// Bank Routes
router.get("/bank", viewBanksController);
router.post("/bank", [
  body("name").not().isEmpty().withMessage("Name is required"),
  body("location").not().isEmpty().withMessage("Location is required"),
  body("branch").not().isEmpty().withMessage("Branch is required"),
  body("phone").not().isEmpty().withMessage("Phone is required"),
  body("address").not().isEmpty().withMessage("Address is required")
], createBankController);
router.put("/bank", updateBankController);
router.delete("/bank", deleteBankController);

// Account Routes
router.post(
  "/accounts",
  [
    body("accountName").not().isEmpty().withMessage("Account name is required"),
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
