const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
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

  numberOfChapitres: {
    type: Number,
    required: true,
  },
  /*formateur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Formateur", //to check
    required: true,
  },*/
  image: {
    type: String,
    default: "5f59da118313c69b8873ae904e11d4a9.png",
  },
  type: {
    type: String,
    required: true,
  },
  chapitres: {
    type: Array,
    default: [],
  },
  quiz: {
    type: String,
    default:
      "https://docs.google.com/forms/d/e/1FAIpQLSctF47eV05W4YgwMU6mRvPts1gS-ZjbPjHc3loV1HuPN5Vnsg/viewform?usp=sf_link",
  },
  numberOfDoneStudents: {
    type: Number,
    default: 0,
  },
});
module.exports = Course = mongoose.model('course', CourseSchema);
