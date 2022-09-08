const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema(
  {
    // userId: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    // },
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
    formateur: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", //to check
      required: true,
    },
    image: {
      type: String,
      default: "5f59da118313c69b8873ae904e11d4a9.png",
    },

    chapitres: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Chapitre", //to check
          required: true,
        },
      ],
      default: [],
    },

    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    numberOfDoneStudents: {
      type: Number,
      default: 0,
    },
    isFree: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;
