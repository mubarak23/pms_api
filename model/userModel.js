const mongooes = require("mongoose");

const { Schema } = mongooes;

const userModel = new Schema({
    username: {type:String, required},
    password: {type: String, required},
    email: {type: String, required},
    assign_to: {type: String, required},
    reg_no: {type: String, required},
    status: {type: Boolean, default: 0}
},{
    timestamps: true
});

module.exports = mongooes.model("users", userModel);
