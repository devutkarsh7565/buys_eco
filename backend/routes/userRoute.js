const express = require("express");
const {
  registerUser,
  loginUser,
  forgetPassword,
  resetPassword,
  logoutUser,
  getUserDetails,
  updatePassword,
  updateUserProfile,
  getAllUser,
  getSingleUser,
  updateUserRole,
  deleteUser,
} = require("../controllers/userController");
const { isUserAuthenticated, authorizeRoles } = require("../middlewear/auth");

const router = express.Router();
//register new user
router.route("/register").post(registerUser);

//forget password
router.route("/password/forget").post(forgetPassword);
router.route("/password/reset/:token").put(resetPassword);

//update Password in dashboard
router.route("/password/update").put(isUserAuthenticated,updatePassword)

// update User Profile 
router.route("/me/update").put(isUserAuthenticated,updateUserProfile)

// get all users
router.route("/admins/users").get(isUserAuthenticated,authorizeRoles("admin"),getAllUser)

// get single user
router.route("/admins/user/:id").get(isUserAuthenticated,authorizeRoles("admin"),getSingleUser).put(isUserAuthenticated,authorizeRoles("admin"),updateUserRole).delete(isUserAuthenticated,authorizeRoles("admin"),deleteUser)
// get user details
router.route("/me").get(isUserAuthenticated,getUserDetails)
//logout user 
router.route("/logout").get(logoutUser)
//login User
router.route("/login").post(loginUser);

module.exports = router;
