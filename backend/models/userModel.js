const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto")

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "Name cannot exceeded 30 characters"],
    minLenght: [8, "Name should not be less than 8 characters"],
  },

  email: {
    type: String,
    required: [true, "please Enter your Email"],
    unique: true,
    validate: [validator.isEmail, "please Enter your Email"],
  },
  password: {
    type: String,
    required: [true, "please Enter Your password"],
    minLength: [8, "password should be greater than 8 characters"],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default:"user",
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

//jwt token

userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// compare password
userSchema.methods.comparePassword = async function(currentPassword)
{
  return await bcrypt.compare(currentPassword,this.password)
  // there are two parameter in compare method the first one is current password which user give when they login 
  //and the second one is this.password the password saved in database schema
}

//Generating  reset password token 

userSchema.methods.getResetPasswordToken = function () {
  // generating token 
  const resetToken = crypto.randomBytes(20).toString("hex")

  //Hashing and adding resetPasswordToken to userSchema
  
 
  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000

  return resetToken

}

module.exports = new mongoose.model("User", userSchema);
