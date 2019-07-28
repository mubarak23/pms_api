const User = require('../model/User');

module.exports = {
    method: POST,
    path: '/api/users',
    //handle the user data vidation
    handler: (req, res) =>{
        let user = new user();
        user.username = req.body.username;
        user.email = req.body.email;
        user.assign_to = req.body.assign_to;
        user.admin = req.body.admin || false;
        user.reg_no = req.body.reg_no;
        user.fullname = req.body.fullname;
        user.save((err, user) =>{
            if(err){
                return Response().json({
                    success: false,
                    message: "internal server error"
                });
            }else{
                return Response().json({
                    success: true,
                    message: 'User Created',
                    data: user
                });
            }
        })
        
    }
} 