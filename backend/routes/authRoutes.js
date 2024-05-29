const authControllers = require("../controllers/authControllers");
const { authMidleware } = require("../middleware/authMiddleware");

const router = require("express").Router();

router.post("/admin-login", authControllers.admin_login);
router.post("/get-user", authMidleware, authControllers.getUser);

module.exports = router;
