const ChatController = require("../controllers/chat/ChatController");
const { authMidleware } = require("../middleware/authMiddleware");
const router = require("express").Router();

router.post(
  "/chat/customer/add-customer-friend",
  ChatController.add_customer_friend
);
router.post(
  "/chat/customer/send-message-to-seller",
  ChatController.customer_message_add
);
router.post(
  "/chat/customer/send-message-to-seller",
  ChatController.customer_message_add
);
router.get(
  "/chat/seller/get-customers/:sellerId",
  ChatController.get_customers
);
router.get(
  "/chat/seller/get-customer-message/:customerId",
  authMidleware,
  ChatController.get_customers_seller_message
);
router.post(
  "/chat/seller/send-message-to-customer",
  authMidleware,
  ChatController.seller_message_add
);
router.get(
  "/chat/admin/get-sellers",
  authMidleware,
  ChatController.get_sellers
);
router.post(
  "/chat/message-send-seller-admin",
  authMidleware,
  ChatController.seller_admin_message_insert
);
router.get(
  "/chat/get-admin-messages/:receverId",
  authMidleware,
  ChatController.get_admin_messages
);

module.exports = router;
