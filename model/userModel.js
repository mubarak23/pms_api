const mongooes = require("mongoose");

const { Schema } = mongooes;

const userModel = new Schema({
    username: {type:String},
    password: {type: String},
    email: {type: String },
    assign_to: {type: String },
    reg_no: {type: String },
    status: {type: Boolean, default: 0}
},{
    timestamps: true
});

module.exports = mongooes.model("users", userModel);
