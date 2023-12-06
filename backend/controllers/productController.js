const Product = require("../models/productModel");
const ApiFeatures = require("../utils/apiFeatures");
const ErrorHandler = require("../utils/errorHandler");

// create Product -- Admin
exports.createProduct = async (req, res) => {
  try {
    req.body.user = req.user.id;
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
    const productCount = await Product.countDocuments();
    //ApiFeatures
    const apiFeature = new ApiFeatures(Product.find(), req.query)
      .search()
      .filter()
      .pagination(resultPerPage);
    const product = await apiFeature.query;
    if (!product) {
      res.status(404).send("product not found");
    }
    res.status(200).json({
      message: "route is working fine",
      success: true,
      product,
      productCount,
    });
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

//create new  product review  or update product review

exports.createProductReview = async (req, res) => {
  try {
    const { rating, comment, productId } = req.body;
    const review = {
      user: req.user.id,
      name: req.user.name,
      rating: Number(rating),
      comment,
    };
    const product = await Product.findById(productId);
    const isReviewed = product.reviews.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );
    if (isReviewed) {
      product.reviews.forEach((rev) => {
        if (rev.user.toString() === req.user._id.toString()) {
          (rev.rating = rating), (rev.comment = comment);
        }
      });
    } else {
      product.reviews.push(review);
      product.numberOfReviews = product.reviews.length;
    }

    let avg = 0;
    product.ratings =
      product.reviews.forEach((rev) => {
        avg += rev.rating;
      }) / product.reviews.length;

    await product.save({ validateBeforeSave: false });
    res.status(200).json({
      success: true,
      product,
      message: "review add successfully",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//get all reviews of product

exports.getProductReviews = async (req, res) => {
  try {
    const product = await Product.findById(req.query.id);
    if (!product) {
      res.status(404).send("product not found");
    }

    res.status(200).json({
      success: true,
      review: product.reviews,
      message: "review fetch successfully",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// delete review

exports.deleteReview = async function (req, res)  {
  try {
    const product = await Product.findById(req.query.productId);

    if (!product) {
      res.status(404).send("product not found");
    }
    const reviews = product.reviews.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );

    let avg = 0;
      reviews.forEach((rev) => {
        avg += rev.rating;
      });

      const ratings = avg/reviews.length;

    const numberOfReviews = reviews.length;

    await Product.findByIdAndUpdate(
      req.query.productId,
      {
        reviews,
        //  ratings,
        numberOfReviews,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
    res.status(200).json({
      success: true,
      product,
      message: "review deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
