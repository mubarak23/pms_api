const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = new Schema({
  email: { type: String, required: true, index: { unique: true } },
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  admin: { type: Boolean, required: true },
  assign_to: {type: String, required: true },
  reg_no: {type: String, required: true},
  fullname: {type:String, required: true}
  
})

module.exports = mongoose.Model('User', userModel);

