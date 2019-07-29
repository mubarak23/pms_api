const mongooes = require('mongoose');
const { Schema } = mongooes;

const projectModel = new Schema({
    title: {type:String},
    description: {type: String},
    assign_student: {type: String},
    assign_supervisor: {type: String},
    status: {type: Boolean, default: 0},
    create_date: {type: Date}
});

module.exports = mongooes.model('Project', projectModel);