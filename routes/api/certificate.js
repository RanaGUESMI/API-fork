const express = require('express');


//Require Router from express
const router = express.Router();
const certificateController = require("../../controllers/certifController");
const isAuth= require("../../middlewares/isAuth")

//Require Schema
const Certificate = require("../../models/Certificate");
const User = require("../../models/User");


//@path :http://localhost:5000/api/certificates/newCertificate
//Create new Chapitre
//accés private
router.post('/newCertificate',isAuth,certificateController.createCertificate);
 

  //@path :http://localhost:5000/api/certificates/
//Get all Certificates
//accés private
router.get('/',isAuth,certificateController.getCertificate);



   //@path :http://localhost:5000/api/certificates/editCertif/:id
//Edit Chapitre
//accés priate
router.put('/editCertif/:id',isAuth,certificateController.editCertificate);



    //@path :http://localhost:5000/api/certificates/deleteCertif/:id
// Delete Certificates
//accés private
router.delete('/deleteCertificate/:id',isAuth,certificateController.deleteCertificate);