const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel")
exports.isUserAuthenticated = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;
  console.log(token);
  if (!token) {
    res.status(401).json({
      message: "Please login to access this resource",
    });
  }
  const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decodedData.id);
  next();
});

exports.authorizeRoles = (...roles) => {
  return (req,res,next) => {
    if(!roles.includes(req.user.role))
    {
      res.status(401).json({
        message: `Role: ${req.user.role} is not allowed to access this resource`,
    })
  }
  next()
}

}


