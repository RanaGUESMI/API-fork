const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  image:{
            type:String,
      },
  age:{
    type:Number,
    default:0,
  },
   socialMedia:{
    type:String,
   },

         tel:{
             type:Number
       },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
