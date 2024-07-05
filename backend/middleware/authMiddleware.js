const jwt = require("jsonwebtoken");

module.exports.authMidleware = async (req, res, next) => {
  const { accessToken } = req.cookies;

  console.log("aaaccc",accessToken);
    console.log("req.cookies",req.cookies);


  if (!accessToken) {
    return res.status(409).json({ error: "Please Login First" });
  } else {
    try {
      const decodeToken = await jwt.verify(accessToken, process.env.SECRET);
      console.log(decodeToken);
      req.role = decodeToken.role;
      req.id = decodeToken.id;
      next();
    } catch (error) {
      return res.status(409).json({ error: "Please Login" });
    }
  }
};
