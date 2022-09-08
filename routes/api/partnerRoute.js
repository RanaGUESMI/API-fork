const express = require("express");

//Require Router from express
const router = express.Router();
const partnerController = require("../../controllers/partnerController");

//@path :http://localhost:5000/api/courses/
//Get all Courses
//accés private
/* router.get("/", isAuth, courseController.getCourse); */
router.get("/", partnerController.getPartner);

module.exports = router;
