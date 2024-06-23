const stripeModel = require("../../models/stripeModel");
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51OhvW7Gr7paNn0fxvVAsZIGBYQQRTp7jMvPHJ78uiwLtHR7xV0UNXkvMQo96zwBRKeb4FdS7pE9w544PBDXx8B6K00dRx0xf01"
);

class paymentController {
  create_stripe_connect_account = async (req, res) => {
    console.log("test data");
    console.log(req.id);
  };
  // End Method
}

module.exports = new paymentController();
