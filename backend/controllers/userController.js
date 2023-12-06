const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

//Register a user
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password,role } = req.body;
    const user = await User.create({
      name,
      email,
      password,
      role,
      avatar: {
        public_id: "this is a public id",
        url: "profileUrl",
      },
    });

    sendToken(user, 201, res);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// user login logic

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    //checking if the user have both email and password
    // status code 400 - bad request
    if (!email || !password) {
      res.status(400).json({
        message: "please enter your email and password",
      });
    }
    const user = await User.findOne({ email }).select("+password").exec();

    if (!user) {
      res.status(401).json({
        message: "invalid email and password",
      });
    }

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
      res.status(401).json({
        message: "invalid email and password",
      });
    }

    sendToken(user, 200, res);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// logout user

exports.logoutUser = async (req, res) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });

    res.status(200).json({
      success: true,
      message: "user logout successfully",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// forget password

exports.forgetPassword = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      res.status(404).json({
        message: "user not found",
      });
    }

    // get ResetPasswordtoken

    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    const resetPasswordUrl = `${req.protocol}://${req.get(
      "host"
    )}/api/v1/password/reset/${resetToken}`;

    const message = `your reset password is :- \n\n ${resetPasswordUrl} \n\n if you have not requested this email then just ignore it `;
    try {
      await sendEmail({
        email: user.email,
        subject: `Ecommerce Password Recovery`,
        message,
      });

      res.status(200).json({
        success: true,
        message: `email sent to ${user.email} successfully`,
      });
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save({ validateBeforeSave: false });
      res.status(500).json({
        message: error.message,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.resetPassword = async (req, res, next) => {
  try {
    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });
    if (!user) {
      res.status(404).json({
        message: "resetPassword token is invalid or has been expired",
      });
    }
    if (req.body.password !== req.body.confirmPassword) {
      res.status(400).json({
        message: "password and confirm password is not matching",
      });
    }
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();
    sendToken(user, 200, res);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getUserDetails = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json({
      success: true,
      user,
      message: "get user details succesfully",
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updatePassword = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("+password");

    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

    if (!isPasswordMatched) {
      res.status(400).json({
        message: "old Password is incorrect",
      });
    }
    if (req.body.newPassword !== req.body.confirmPassword) {
      res.status(400).json({
        message: "password and confirm password is not matching",
      });
    }
    user.password = req.body.newPassword;
    await user.save();
    sendToken(user, 200, res);
    // res.status(200).json({
    //   success: true,
    //   user,
    // });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//update user profile

exports.updateUserProfile = async (req, res, next) => {
  try {
    const newUserDate = {
      name: req.body.name,
      email: req.body.email,
    };

    // we will add cloudinary later
    const user = await User.findByIdAndUpdate(req.user.id, newUserDate, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// get all users - admin

exports.getAllUser = async (req, res, next) => {
  try {
    const user = await User.find();

    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};


// get single user - admin
exports.getSingleUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({
        message: `user does not exist with Id: ${req.params.id}`,
      });
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//delete user -- admin
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({
        message: `user does not exist with Id: ${req.params.id}`,
      });
    }

    await user.remove();
    res.status(200).json({
      success: true,
      message:"user deleted succesfully"
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// update user Role -- admin
exports.updateUserRole = async (req, res, next) => {
  try {
    const newUserDate = {
      name: req.body.name,
      email: req.body.email,
      role:req.body.role
    }

        // we will add cloudinary later
        const user = await User.findByIdAndUpdate(req.user.id, newUserDate, {
          new: true,
          runValidators: true,
          useFindAndModify: false,
        });

    res.status(200).json({
      success: true,
    user
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
