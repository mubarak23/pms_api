//import bcrypt from 'bcrypt';
module.exports =  {
 signup (req, res, next) {
    req.body.username = req.body.username && req.body.username.toLowerCase();
    req.body.reg_no = req.body.username && req.body.reg_no.toUpperCase();
   //console.log(req.body);
    const { username, email, password, reg_no, assign_to, confirmPasword } = req.body;
    if( username === undefined || typeof username !== 'string'){
        return res.status(400).send({
            message: 'Username is required Why'
        })
    }else if(!email){
        return res.status(400).send({
            message: 'Email Address is required'
        })
    } else if(!passsword || typeof password !== 'string'){
        res.status(400).send({
            message: 'Password is required'
        })
    }else if(!(password === confirmPasword)){
        res.status(400).send({
            message: 'Password does not match'
        })
    }else if(!reg_no || typeof reg_no !== 'string'){
        res.status(400).send({
            message: 'registration number is required'
        })
    }else if(!assign_to || typeof assign_to !== 'string'){
        res.status(400).send({
            message: 'assign supervisor is required'
        })
    }
 next();
},

 signin (req, res, next) {
    req.body.username = req.body.username && req.body.username.toLowerCase();
    const { username, passsword} = req.body;
    if(!username || typeof username !== 'string'){
        return res.status(400).send({
            message: 'Username is required'
        })
    }else if(!password || typeof password !== 'string'){
        return res.status(400).send({
            message: 'Password is required'
        });
    }
    next();
},
createMeeting(req, next, res){
    const { date, time, location, create_by, with_student_by, create_at} = req.body;
    if(!date){
        return res.status(401).send({
            message: 'Meeting Date is required'
        })
    } else if(!time){
        return req.json(401).send({
            message: 'Meeting Time is required'
        })
    } else if(!location){
        return res.status(401).send({
            message: 'Meeting Location is required'
        })
    } else if(!create_by){
        return res.status(401).send({
            message: 'Created by field is required'
        })
    }else if(!with_student_by){
        return res.status(401).send({
            message: 'With Student Field is required'
        })
    }else if(!create_at){
        return res.status(401).send({
            message: 'Created at Field is required'
        })
    }
    next();
},
createProject(req, next, res){
    const { title, description, assign_student, assign_supervisor, status} = req.body;
    if(!title){
        return res.status(401).send({
            message: 'Title Date is required'
        })
    } else if(!description){
        return req.json(401).send({
            message: 'Description Time is required'
        })
    } else if(!assign_student){
        return res.status(401).send({
            message: 'Assign Student is required'
        })
    } else if(!assign_supervisor){
        return res.status(401).send({
            message: 'Assign Supervisor field is required'
        })
    }
    next();
}

}