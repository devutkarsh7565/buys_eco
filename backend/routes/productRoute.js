const express = require("express");
const {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require("../controllers/productController");
const { isUserAuthenticated, authorizeRoles } = require("../middlewear/auth");

const router = express.Router();
//create new product
router
  .route("/admin/product/new")
  .post(isUserAuthenticated, authorizeRoles("admin"), createProduct);

// get all Products
router.route("/products").get(getAllProduct);

// get individual product details
router.route("/product/:id").get(getProductDetails);

//product update or delete operation
router
  .route("/admin/product/:id")
  .put(isUserAuthenticated, authorizeRoles("admin"), updateProduct)
  .delete(isUserAuthenticated, authorizeRoles("admin"), deleteProduct);

//create product review
router.route("/review").put(isUserAuthenticated, createProductReview);

//get  product all review and delete a review
router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isUserAuthenticated, deleteReview);

//create product review 
router.route("/review").put(isUserAuthenticated,createProductReview);

//get  product all review and delete a review 
router.route("/reviews").get(getProductReviews).delete(isUserAuthenticated,deleteReview);

module.exports = router;
