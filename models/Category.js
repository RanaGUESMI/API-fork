const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  courseId: [
    {
      type: Schema.Types.ObjectId,
      ref: "course",
    },
  ],
});

module.exports = Category = mongoose.model("category", CategorySchema);
