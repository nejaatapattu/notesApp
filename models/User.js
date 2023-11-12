
const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {type:String, required: true, unique = true}, // String is shorthand for {type: String}
    password:{type:String,required:true},
  },{timestamps: true});

  module.exports = mongoose.model('User', userSchema);