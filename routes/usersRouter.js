const express = require('express');
const userRouter = express.Router();
 const bcrypt = require('bcryptjs');

function routes(User){
    userRouter.route('/user')
    .get((req, res) => {
        User.find((error, users) =>{
            if(error){
              return res.status(401).json({
                    "message": "Internal Server Error",
                });
            }
             return res.status(401).json({
                "message": "List of users",
                "data": users
            });
        })
    })
    .post((req, res) =>{
        let hash_password = bcrypt.hash(req.body.password, 8);
        req.body.password = hash_password;
        const user = new User(req.body);
        user.save();
        return res.status(201).json(user);
    })

    userRouter.route('/user/:userID')
    .get((req, res) =>{
        const userID = req.params.userID;
        User.findById(userID, (error, user) =>{
            if(error){
                return res.status(401).json({
                    "message": "Unable to find User with specify ID"
                });
            }
            return res.status(200).json({
                "message": "user Details",
                "data": user
            });
        })
    }) 
    userRouter.route('/user/login')
    .get((req, res) =>{
        
    })
    
    return userRouter;
}

module.exports = routes;
