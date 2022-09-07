const User = require("../models/User");

// controller function

// this controller return list of all admins in the database (in the colllection user)
// users considered as admin that mean user with role Admin in the database collection (Table in the sql language)
const getAdmins = async (req, res) => {
  // business logic and database query or fetching
  try {
    // step one : to retreive data from collection and we put it inside variable
    // const adminsArray = await User.find() // to get all data collection
    const adminsArray = await User.find({ role: "Admin", isDeleted: false }); //.select("-password") // to get all data collection
    res.status(200).json({
      data: adminsArray,
      count: adminsArray.length,
    });
    // boom done !
  } catch (error) {
    console.log(error);
    // in case we have an error
    res.status(400).json({
      error,
    });
  }
};

// /api/admin/73857873578573
const updateAdmin = async (req, res) => {
  try {
    const id = req.params.id; // number or mongo id
    const newAdminInfo = req.body; // {}
    // step one find admin to update
    const updatedAdmin = await User.findByIdAndUpdate(id, newAdminInfo);
    // check status code to verify
    res.status(200).json({ updatedAdmin });
  } catch (error) {
    console.log(error);
    // in case we have an error
    res.status(400).json({
      error,
    });
  }
};

// /api/admin/delete/73857873578573

const deleteAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedAdmin = await User.findByIdAndUpdate(id, { isDeleted: true });
    res.status(200).json({ msg: "admin deleted" });
  } catch (error) {
    console.log(error);
    // in case we have an error
    res.status(400).json({
      error,
    });
  }
};

const getGestionnaire = async (req, res) => {
  try {
    const GestionnaireArray = await User.find({
      role: "Gestionnaire",
      isDeleted: false,
    }); //.select("-password") // to get all data collection
    res.status(200).json({
      data: GestionnaireArray,
      count: GestionnaireArray.length,
    });
    // boom done !
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
    });
  }
};

// /api/admin/73857873578573
const updateGestionnaire = async (req, res) => {
  try {
    const id = req.params.id;
    const newGestionnaireInfo = req.body;
    const updatedGestionnaire = await User.findByIdAndUpdate(
      id,
      newGestionnaireInfo
    );
    res.status(200).json({ msg: "updatedGestionnaire", updatedGestionnaire });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
    });
  }
};

// /api/Gestionnaire/delete/73857873578573
const deleteGestionnaire = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedGestionnaire = await User.findByIdAndUpdate(id, {
      isDeleted: true,
    });
    res.status(200).json({ msg: "Gestionnaire deleted", deletedGestionnaire });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
    });
  }
};

const getFormateur = async (req, res) => {
  try {
    const FormateurArray = await User.find({
      role: "Formateur",
      isDeleted: false,
    });
    res.status(200).json({
      data: FormateurArray,
      count: FormateurArray.length,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
    });
  }
};

const updateFormateur = async (req, res) => {
  try {
    const id = req.params.id;
    const newFormateurInfo = req.body;
    const updatedFormateur = await User.findByIdAndUpdate(id, newFormateurInfo);
    res.status(200).json({ msg: "updated foramteur ", updatedFormateur });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
    });
  }
};

const deleteFormateur = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedFormateur = await User.findByIdAndUpdate(id, {
      isDeleted: true,
    });
    res.status(200).json({ msg: "Formateur deleted", deletedFormateur });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
    });
  }
};

const getStudent = async (req, res) => {
  try {
    const StudentArray = await User.find({ role: "Student", isDeleted: false }); //.select("-password")
    res.status(200).json({
      data: StudentArray,
      count: StudentArray.length,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
    });
  }
};

// /api/student/73857873578573
const updateStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const newStudentInfo = req.body;
    const updatedStudent = await User.findByIdAndUpdate(id, newStudentInfo);
    res.status(200).json({ msg: "updatedStudent", updatedStudent });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
    });
  }
};

// /api/Student/delete/73857873578573
const deleteStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedStudent = await User.findByIdAndUpdate(id, {
      isDeleted: true,
    });
    res.status(200).json({ msg: "Student deleted", deletedStudent });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
    });
  }
};

module.exports = {
  getAdmins,
  updateAdmin,
  deleteAdmin,
  getFormateur,
  updateFormateur,
  deleteFormateur,
  getGestionnaire,
  updateGestionnaire,
  deleteGestionnaire,
  deleteGestionnaire,
  getStudent,
  updateStudent,
  deleteStudent,
};
