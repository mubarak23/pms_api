const express = require('express');
const userRouter = express.Router();

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
        const user = new User(req.body);
        user.save();
        return res.status(201).json(user);
    })
}