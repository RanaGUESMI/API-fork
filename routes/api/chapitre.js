const express = require("express");

//Require Router from express
const router = express.Router();
const chapitreController = require("../../controllers/chapitreController");
const isAuth = require("../../middlewares/isAuth");

//@path :http://localhost:5000/api/chapitres/newChapitre
//Create new Chapitre
//accés private
// router.post('/newChapitre',isAuth,chapitreController.createChapitre);
router.post("/newChapitre", chapitreController.createChapitre);

//@path :http://localhost:5000/api/chapitres/
//Get all Chapitres
//accés private
// router.get('/',isAuth,chapitreController.getChapitre)
router
  .get("/", chapitreController.getChapitre)
  .get("/:courseId", isAuth, chapitreController.getChapterByCourseId);
// router.get('/',chapitreController.getChapitre)

//@path :http://localhost:5000/api/chapitres/deleteChapitres/:id
// Delete Chapitre
//accés private
router.delete("/deleteChapitre/:id", isAuth, chapitreController.deleteChapitre);

//@path :http://localhost:5000/api/chapitres/editChapitre/:id
//Edit Chapitre
//accés priate
router.put("/editChapitre/:id", isAuth, chapitreController.editChapitre);

module.exports = router;
