const dashboardController = require("../../controllers/dashboard/dashboardController");
const { authMidleware } = require("../../middleware/authMiddleware");
const router = require("express").Router();

router.get(
  "/admin/get-dashboard-data",
  authMidleware,
  dashboardController.get_admin_dashboard_data
);
router.get(
  "/seller/get-dashboard-data",
  authMidleware,
  dashboardController.get_seller_dashboard_data
);

router.post("/banner/add", authMidleware, dashboardController.add_banner);
router.get(
  "/banner/get/:productId",
  authMidleware,
  dashboardController.get_banner
);

module.exports = router;
