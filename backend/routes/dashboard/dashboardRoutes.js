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

module.exports = router;
