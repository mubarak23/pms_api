const mongoose = require("mongoose");

//destructing Schema
const { Schema } = mongoose;

//creating meeting schema
const meetingModel = new Schema({
    date: {type: Date},
    time: {type: String},
    location: {type: String},
    created_by: { type: String},
    with_student_by: {Type: String},
    create_at: { type: Date}
},
{
    timestamps: true
});

module.exports = mongoose.model('Meeting', meetingModel);