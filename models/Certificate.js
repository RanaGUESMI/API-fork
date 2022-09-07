const mongoose = require("mongoose");

const CertificateSchema = new mongoose.Schema(
  {
    name: {
      type: "String",
      required: true,
    },
    description: {
      type: "String",
      required: true,
    },
    // studentId: {
    //   type: mongoose.Schema.Types.ObjectId, //not sure
    //   ref: "User",
    //   required: true,
    // },
    courseId: {
      type: mongoose.Schema.Types.ObjectId, //not sure
      ref: "Course",
      required: true,
    },
  },
  { timestamps: true }
);
const Certificate = mongoose.model("Certificate", CertificateSchema);
module.exports = Certificate;
