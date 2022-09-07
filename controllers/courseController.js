const Course = require("../models/Course");
const Category = require("../models/Category");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const createCourse = async (req, res) => {
  try {
    const newCourse = new Course({
      userId: req.userId,
      ...req.body,
    });
    const categoryId = req.body.categoryId;
    const coursesIdsArr = [];
    const course = await newCourse.save();

    coursesIdsArr.push(course.id);
    await Category.findByIdAndUpdate(categoryId, {
      courseId: coursesIdsArr,
    });

    res.json({ msg: "course created", course });
  } catch (error) {
    res.status(500).send("server error");
  }
};

const getCoursesByCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;

    const courses = await Course.find({ categoryId }).populate("categoryId");

    res.json({
      data: courses,
      count: courses.length, // cousrses.count mich data.count
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const getCourse = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json({ courses });
  } catch (error) {
    res.send("server error");
  }
};
const getFreeCourse = async (req, res) => {
  try {
    const freeCourses = await Course.find({ isFree: true });
    res.json({ data: freeCourses, count: freeCourses.length });
  } catch (error) {
    res.send("server error");
  }
};

const editCourse = async (req, res) => {
  try {
    const editedCourse = await Course.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.json({ msg: "Course edited", editedCourse });
  } catch (error) {
    res.send("server error");
  }
};

const deleteCourse = async (req, res) => {
  try {
    const courseDeleted = await Course.findOneAndDelete({ _id: req.params.id });
    res.json({ msg: "Course deleted", courseDeleted });
  } catch (error) {
    res.send("server error");
  }
};

module.exports = {
  createCourse,
  getCourse,
  getFreeCourse,
  getCoursesByCategory,
  editCourse,
  deleteCourse,
};
