const express = require("express");
const router = express.Router();
// const User=require("../../models/User");
const adminController = require("../../controllers/adminController");
const isAuth = require("../../middlewares/isAuth");
const isAdmin = require("../../middlewares/isAdmin");

// path: http://localhost:5000/api/users/
// get all users
//

// router.get("/",isAuth,isAdmin, adminController.getAdmins);
router
  .get("/", isAuth, adminController.getAdmins)
  .patch("/:id", isAuth, adminController.updateAdmin)
  .patch("/:id/delete", adminController.archiveAdmin) // archive
  .delete("/:id", adminController.deleteAdmin); // delete
router.get("/trainer", isAuth, adminController.getTrainer);

module.exports = router;
