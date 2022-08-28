const Formation = require("../models/Formation");

const createFormation = async (req, res) => {
  try {
    const newFormation = new Formation({
      userId: req.user.id, //GestionnaireId
      ...req.body,
    });
    const formation = await newFormation.save();

    res.json({ msg: "formation created", formation });
  } catch (error) {
    res.status(500).json("server error");
  }
};

const getFormation = async (req, res) => {
  try {
    const formations = await Formation.find().populate("userId");
    res.json({ formations });
  } catch (error) {
    res.status(500).json("server error");
  }
};

const editFormation = async (req, res) => {
  try {
    const editedFormation = await Formation.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.json({ msg: "Profile edited", editedFormation });
  } catch (error) {
    res.status(400).json("server error");
  }
};

const deleteFormation = async (req, res) => {
  try {
    const formationDeleted = await Formation.findOneAndDelete({
      _id: req.params.id,
    });
    res.json({ msg: "Formation deleted", formationDeleted });
  } catch (error) {
    res.status.json("server error");
  }
};

module.exports = {
  createFormation,
  getFormation,
  editFormation,
  deleteFormation,
};
