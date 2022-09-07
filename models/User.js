//Require mongoose
const mongoose = require("mongoose");

//require schema from mongoose

const Schema = mongoose.Schema;
//Create the user schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      // required: true,
      enum: ["Admin", "Gestionnaire", "Formateur", "Student"],
      default: "Student",
    },
    courses: [
      {
        type: Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
    // categories: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Category",
    //   },
    // ],
    // chapitres: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Chapitre",
    //   },
    // ],
    // formations: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Formation",
    //   },
    // ],
    certificates: [
      {
        type: Schema.Types.ObjectId,
        ref: "Certificate",
      },
    ],
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
let User = mongoose.model("User", userSchema);
module.exports = User;
// module.exports = User = mongoose.model("User", userSchema);

// moula el bash => superAdmin
// Gestionniare => Admin
//
