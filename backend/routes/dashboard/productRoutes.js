const productController = require("../../controllers/dashboard/productController");
const { authMidleware } = require("../../middleware/authMiddleware");
const router = require("express").Router();

router.post("/product-add", authMidleware, productController.add_product);
router.get("/products-get", authMidleware, productController.products_get);
router.get(
  "/product-get/:productId",
  authMidleware,
  productController.product_get
);
router.post("/product-update", authMidleware, productController.product_update);

router.post(
  "/product-image-update",
  authMidleware,
  productController.product_image_update
);

module.exports = router;
