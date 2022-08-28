const mongoose = require("mongoose");
const ChapitreShema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  data: {
    type: String, //filename
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId, //not sure
    ref: "Course",
    required: false,
  },
});
let Chapitre = mongoose.model("Chapitre", ChapitreShema);
module.exports = Chapitre;
