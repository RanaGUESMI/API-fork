const express = require('express');


//Require Router from express
const router = express.Router();
const profileController=require("../../controllers/profileController");
const isAuth= require("../../middlewares/isAuth")

//Require Schema
const Profile = require("../../models/Profile")
const User = require("../../models/User");


//@path :http://localhost:5000/api/profiles/newProfile
//Create new Profile
//accés private
router.post('/newProfile',isAuth,profileController.createProfile)
 

  //@path :http://localhost:5000/api/profiles/
//Get all Profiles
//accés private
router.get('/',isAuth,profileController.getProfile)
 
    //@path :http://localhost:5000/api/profiles/deleteProfile/:id
// Delete Profile
//accés private
router.delete('/deleteProfile/:id',isAuth,profileController.deleteProfile)
 
   //@path :http://localhost:5000/api/profiles/editProfile/:id
//Edit Profile
//accés private
router.put('/editProfile/:id',isAuth,profileController.editProfile)
   //@path :http://localhost:5000/api/profiles/:id
//Get ProfileById
//accés private
router.get("/:id",isAuth,profileController.getProfileById)


// @path  GET http://localhost:5000/api/profiles/connectedUser/me
// @desc    Get current user profile
// @access  Private

router.get("/connectedUser/me",isAuth,profileController.getCurrentProfile)




module.exports = router;