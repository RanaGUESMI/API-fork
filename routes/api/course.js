const express = require('express');


//Require Router from express
const router = express.Router();
const courseController=require("../../controllers/courseController");
const isAuth= require("../../middlewares/isAuth")

//Require Schema
const Course = require("../../models/Course")
const User = require("../../models/User");


//@path :http://localhost:5000/api/courses/newCourse
//Create new Course
//accés private
router.post('/newCourse',isAuth,courseController.createCourse);
 

  //@path :http://localhost:5000/api/courses/
//Get all Courses
//accés private
router.get('/',isAuth,courseController.getCourse)
 
    //@path :http://localhost:5000/api/courses/deleteCourse/:id
// Delete Course
//accés private
router.delete('/deleteCourse/:id',isAuth,courseController.deleteCourse)
 
   //@path :http://localhost:5000/api/courses/editCourse/:id
//Edit Course
//accés private
router.put('/editCourse/:id',isAuth,courseController.editCourse);
 


module.exports = router;