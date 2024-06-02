const categoryController = require("../../controllers/dashboard/categoryController");

const { authMidleware } = require("../../middleware/authMiddleware");
const router = require("express").Router();

router.post("/category-add", authMidleware, categoryController.add_category);
router.get("/category-get", authMidleware, categoryController.get_category);

module.exports = router;
