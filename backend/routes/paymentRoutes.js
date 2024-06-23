const paymentController = require("../controllers/payment/paymentController");
const { authMidleware } = require("../middleware/authMiddleware");
const router = require("express").Router();

router.get(
  "/payment/create-stripe-connect-account",
  authMidleware,
  paymentController.create_stripe_connect_account
);

module.exports = router;
