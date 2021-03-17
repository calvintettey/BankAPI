const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const {
  createUserController,
  viewUserController,
} = require("../controllers/userControllers");

router.post("/users", [
    body("userName").not().isEmpty().withMessage("Username is required"),
    body("email").not().isEmpty().withMessage("Email is required"),
    body("password").not().isEmpty().withMessage("Password is required"),
    //body("Account").not().isEmpty().withMessage("Account is required")
], createUserController);
router.get("/users", viewUserController);

module.exports = router;
