const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FormationSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  numberOfCourses: {
    type: Number,
    required: true,
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Formateur", //to check
    default: "60c1f7953d85d19ae170ef86",
  },
  image: {
    type: String,
    default: "5f59da118313c69b8873ae904e11d4a9.png",
    //add a default image to all these models
  },
  courses: {
    type: Array,
    default: [],
  },
  numberOfDoneStudents: {
    type: Number,
    default: 0,
  },
});
let Formation = mongoose.model("Formation", FormationSchema);
module.exports = Formation;
