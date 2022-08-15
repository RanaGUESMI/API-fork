const express = require('express');


//Require Router from express
const router = express.Router();
//Require Controller
const formationController=require("../../controllers/formationController");
//Require middleware
const isAuth= require("../../middlewares/isAuth")

//Require Schema
const Formation = require("../../models/Formation")
const User = require("../../models/User");


//@path :http://localhost:5000/api/formations/newFormation
//Create new Formation
//accés private
router.post('/newFormation',isAuth,formationController.createFormation);
 

  //@path :http://localhost:5000/api/formations/
//Get all formations
//accés private
router.get('/',isAuth,formationController.getFormation)
 
    //@path :http://localhost:5000/api/formations/deleteFormations/:id
// Delete formation
//accés private
router.delete('/deleteFormation/:id',isAuth,formationController.deleteFormation);
 
   //@path :http://localhost:5000/api/formations/editFormation/:id
//Edit formation
//accés priate
router.put('/editFormation/:id',isAuth,formationController.editFormation);
 


module.exports = router;