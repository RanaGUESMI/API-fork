const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PartnerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    logo: {
      type: String,
      default: 0,
    },
  },
  { timestamps: true }
);

const Partner = mongoose.model("Partner", PartnerSchema);
module.exports = Partner;
