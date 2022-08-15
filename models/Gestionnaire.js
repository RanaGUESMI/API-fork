const mongoose = require("mongoose");
const GestionnaireSchema = new mongoose.Schema({
  active: {
    type: Boolean,
    default: false,
  },
  authorise: {
    type: Boolean,
    default: false,
  },
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

  //array = [students (notes, currentState..),courses]
  courses: {
    type: Array,
    default: [],
  },
  formations: {
    type: Array,
    default: [],
  },
  formateurs: {
    type: Array,
    default: [],
  },

});
let Gestionnaire = mongoose.model("Gestionnaire", GestionnaireSchema);
module.exports = Gestionnaire;
