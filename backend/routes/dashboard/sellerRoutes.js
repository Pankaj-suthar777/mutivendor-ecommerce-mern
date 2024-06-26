const sellerController = require("../../controllers/dashboard/sellerController");
const { authMidleware } = require("../../middleware/authMiddleware");
const router = require("express").Router();

router.get(
  "/request-seller-get",
  authMidleware,
  sellerController.request_seller_get
);
router.get("/get-seller/:sellerId", authMidleware, sellerController.get_seller);
router.post(
  "/seller-status-update",
  authMidleware,
  sellerController.seller_status_update
);
router.get("/get-sellers", authMidleware, sellerController.get_active_sellers);

router.get(
  "/get-deactive-sellers",
  authMidleware,
  sellerController.get_deactive_sellers
);

module.exports = router;
