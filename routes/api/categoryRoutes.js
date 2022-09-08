const express = require("express");

const router = express.Router();
const CategoryController = require("../../controllers/categoryController");
const isAuth = require("../../middlewares/isAuth");

const Category = require("../../models/Category");
const User = require("../../models/User");

//create new category
// path: http://localhost:5000/api/category/newCategory

router
  .post("/newCategory", isAuth, CategoryController.createCategory)
  .get("/", isAuth, CategoryController.getCategories);
// .get("/", CategoryController.getCategories);

module.exports = router;
