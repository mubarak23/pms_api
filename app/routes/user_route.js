var ObjectID = require('mongodb').ObjectID; 

module.exports = function(app, db){
 app.post('/api/v1/user/create', (req, res) =>{
     if(!req.body.username){
         return res.status(401).send({
             success: 'false',
             message: 'username is required'
         });
     }
     if(!req.body.fullname){
         return res.status(401).send({
             success: false,
             message: 'full name is require'
         });
     }
     if(!req.body.password){
         return res.status(401).send({
             success: false,
             message: 'Password is required'
         });
     }
     if(!req.body.email){
         return res.status(401).send({
             success: false,
             message: 'Email is required'
         });
     }
     if(!req.body.assign_to){
        return res.status(401).send({
            success: false,
            message: 'Assign_to field is required'
        });
    }
    if(!req.body.reg_no){
        return res.status(401).send({
            success: false,
            message: 'Registration is required'
        });
    }
     const project = {username: req.body.username,
         fullname:req.body.fullname,
        password: req.body.password,
        email: req.body.email,
        assign_to:req.body.assign_to,
        reg_no: req.body.reg_no,
        create_date: (new Date(Date.now()).toISOString())};
        //let db = client.db("nodehome");
     db.collection("users").insert(project, (err, result) =>{
         if(err){
             //res.send({"error": "An error has Occured"});
             return res.status(401).send({
                 success: false,
                 message: 'Internal Server Error'
             });
         }else{
             return res.status(200).send({
                 success: true,
                 message: 'New User Created',
                 data: result.ops[0]
             }) 
             //send the email with a link to confirm his email address and login
             //res.send(result.ops[0]);
         }
     });
 });


}