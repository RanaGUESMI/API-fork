const express = require("express");

//Require Router from express
const router = express.Router();
const courseController = require("../../controllers/courseController");
const isAuth = require("../../middlewares/isAuth");

//Require Schema
const Course = require("../../models/Course");
const User = require("../../models/User");

//@path :http://localhost:5000/api/courses/newCourse
//Create new Course
//accés private
/* router.post("/newCourse", isAuth, courseController.createCourse); */
router.post("/newCourse", courseController.createCourse);

//@path :http://localhost:5000/api/courses/
//Get all Courses
//accés private
/* router.get("/", isAuth, courseController.getCourse); */
router.get("/", isAuth, courseController.getCourse);

router.get("/free", courseController.getFreeCourse);

// @Get :http://localhost:5000/api/courses/:id

router.get("/:id", courseController.getCoursesByCategory);
//@path :http://localhost:5000/api/courses/deleteCourse/:id
// Delete Course
//accés private
router.delete("/deleteCourse/:id", isAuth, courseController.deleteCourse);

//@path :http://localhost:5000/api/courses/editCourse/:id
//Edit Course
//accés private
router.patch("/editCourse/:id", isAuth, courseController.editCourse);

module.exports = router;

/* //{
  "studentId":"62ff57c3131678bec17f58a7",
  "courseId":"62ff5fc6af56f516e26480fa",
  "name":"certif one",
  "description":"description certifcate"

  
} */
