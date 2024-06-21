const authControllers = require("../controllers/authControllers");
const { authMidleware } = require("../middleware/authMiddleware");

const router = require("express").Router();

router.post("/admin-login", authControllers.admin_login);
router.get("/get-user", authMidleware, authControllers.getUser);
router.post("/seller-register", authControllers.seller_register);
router.post("/seller-login", authControllers.seller_login);
router.post(
  "/profile-image-upload",
  authMidleware,
  authControllers.profile_image_upload
);
router.post(
  "/profile-info-add",
  authMidleware,
  authControllers.profile_info_add
);
router.get("/logout", authMidleware, authControllers.logout);

module.exports = router;
