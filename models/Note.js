
const mongoose = require('mongoose')
const noteSchema = new mongoose.Schema({
    email: {type:String, required: true}, // String is shorthand for {type: String}
    titel:{type:String,required:true},
    desc:{type:String,required:true}
  },{timestamps: true});

  module.exports = mongoose.model('Note', noteSchema);