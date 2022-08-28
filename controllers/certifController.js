const Certificate = require("../models/Certificate");

const createCertificate = async (req, res) => {
  try {
    const newCertificate = new Certificate({
      userId: req.user.id,
      ...req.body,
    });
    const certificate = await newCertificate.save();

    res.json({ msg: "certificate created", certificate });
  } catch (error) {
    res.status(500).send("server error");
  }
};

const getCertificate = async (req, res) => {
  try {
    const certificates = await Certificate.find().populate("userId");
    res.json({ certificates });
  } catch (error) {}
};

const editCertificate = async (req, res) => {
  try {
    const editedCertificate = await Certificate.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.json({ msg: "Certificate edited", editedCertificate });
  } catch (error) {
    res.send("server error");
  }
};

const deleteCertificate = async (req, res) => {
  try {
    const certificateDeleted = await Certificate.findOneAndDelete({
      _id: req.params.id,
    });
    res.json({ msg: "Certificate deleted", certificateDeleted });
  } catch (error) {
    res.send("server error");
  }
};

module.exports = {
  createCertificate,
  getCertificate,
  editCertificate,
  deleteCertificate,
};
