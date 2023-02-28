const Product = require("../models/productModel");
const ApiFeatures = require("../utils/apiFeatures");
const ErrorHandler = require("../utils/errorHandler");

// create Product -- Admin
exports.createProduct = async (req, res) => {
  try {
    req.body.user = req.user.id
    const product = await Product.create(req.body);
    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Get all Product
exports.getAllProduct = async (req, res) => {
  try {
    const resultPerPage = 5;
    const productCount = await Product.countDocuments()
    //ApiFeatures
    const apiFeature = new ApiFeatures(Product.find(), req.query).search().filter().pagination(resultPerPage);
    const product = await apiFeature.query;
    if (!product) {
       res.status(404).send("product not found");
    }
    res
      .status(200)
      .json({ message: "route is working fine", success: true, product,productCount });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//get product Details
exports.getProductDetails = async (req, res, next) => {
  try {
    const productControllers = await Product.findById(req.params.id);

    if (!productControllers) {
      // return next(new ErrorHandler("Product not found",404));
      res.status(404).send("product not found");
    }
    res.status(200).json({
      message: "route is working fine",
      success: true,
      productControllers,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// update Product -- By Admin

exports.updateProduct = async (req, res, next) => {
  try {
    const productController = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true, useFindAndModify: false }
    );
    res.status(200).json({
      success: true,
      productController,
      message: "product updated Successfully",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//DeleteProduct - By Admin

exports.deleteProduct = async (req, res) => {
  try {
    const productController = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      productController,
      message: "product deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
