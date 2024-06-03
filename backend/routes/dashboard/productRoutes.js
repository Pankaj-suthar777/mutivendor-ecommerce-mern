const productController = require("../../controllers/dashboard/productController");
const { authMidleware } = require("../../middleware/authMiddleware");
const router = require("express").Router();

router.post("/product-add", authMidleware, productController.add_product);
router.get("/products-get", authMidleware, productController.products_get);

module.exports = router;
