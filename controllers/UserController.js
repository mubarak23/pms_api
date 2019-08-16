const  User =  require('../model/userModel');

const UserController = {

createUser(req, res, next){
    const { email } = req.body;
    User.findOne({ email })
    .exec()
    .then(user =>{
        if(user){
            res.status(422).send({
                message: 'Email Already exisit'
            });
        }
        return User.create(req.body)
        .then(user =>{
            return res.status(200).send({
                message: `Successfully added ${user.username}`
            })
        })
    })
    .catch(err => next(err));
}

}

module.exports = UserController;