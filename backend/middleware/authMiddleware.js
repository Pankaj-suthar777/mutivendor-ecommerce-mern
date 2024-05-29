const jwt = require("jsonwebtoken");

module.exports.authMidleware = async (req, res, next) => {
  const { accessToken } = req.cookies;

  if (!accessToken) {
    return res.status(409).josn({ error: "Please Login First" });
  } else {
    try {
      const decodeToken = await jwt.verify(accessToken, process.env.SECRET);
      req.role = decodeToken.role;
      req.id = decodeToken.id;
      next();
    } catch (error) {
      return res.status(409).josn({ error: "Please Login" });
    }
  }
};
