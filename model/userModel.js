const mongooes = require("mongoose");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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

userModel.method.generateAuthToken = function(){
    const user = this;
    const token = jwt.sign({_id: user._id}, '#$124^&*');
    return token;
}

userModel.static.findByCredentials = async (email, password) =>{
    const user = users.findOne({email});
    if(!user){
        throw new Error({error: 'Invalid Login Credential'})
    }
    const MatchPassword = await bcrypt.compare(password, user.password);
    if(!MatchPassword){
        throw new Error({error: 'Invalid Login Credential'});
    }
    return user;
}

module.exports = mongooes.model("users", userModel);
