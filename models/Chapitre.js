const mongoose = require("mongoose");
// i think it would be better if we had a seperate module for chapters and in chapter we take the order and the id of course
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
