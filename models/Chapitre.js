const mongoose = require("mongoose");
const ChapitreShema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId, //not sure
      ref: "Course",
      required: true,
    },
  },
  { timestamps: true }
);
const Chapitre = mongoose.model("Chapitre", ChapitreShema);
module.exports = Chapitre;
