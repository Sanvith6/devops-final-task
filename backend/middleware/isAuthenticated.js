const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
  try {
    if (!process.env.USER_JWT_TOKEN) {
      return res.status(500).json({
        success: false,
        message: "USER_JWT_TOKEN is missing in environment variables",
      });
    }

    const cookieToken = req.cookies.userToken;
    const authHeader = req.headers.authorization;

    const bearerToken = authHeader?.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : null;

    const tokensToTry = [bearerToken, cookieToken].filter(Boolean);

    if (tokensToTry.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: No token provided",
      });
    }

    let decodedToken = null;

    for (const t of tokensToTry) {
      try {
        decodedToken = jwt.verify(t, process.env.USER_JWT_TOKEN);
        break;
      } catch (error) {}
    }

    if (!decodedToken) {
      return res.status(401).json({
        success: false,
        message: "Invalid or expired token. Please login again.",
      });
    }

    req.userId = decodedToken.userId;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
};

module.exports = isAuthenticated;