const Category = require("../models/Category");

const createCategory = async (req, res) => {
  try {
    const newCategory = new Category({
      userId: req.user.id,
      ...req.body,
    });

    const category = await newCategory.save();
    res.json({ msg: "Category created", category });
  } catch (error) {
    res.status(400).send("server error");
  }
};
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().populate("courseId");
    res.json({ data: categories, count: categories.length });
  } catch (error) {
    console.log(error);
    res.status(400).send("server error");
  }
};

module.exports = {
  createCategory,
  getCategories,
};
