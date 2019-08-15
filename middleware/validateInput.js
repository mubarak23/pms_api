import bcrypt from 'bcrypt';

signup((req, res, next) =>{
    req.body.username = req.body.username && req.body.username.toLowerCase();
    req.body.reg_no = req.body.username && req.body.reg_no.toUpperCase();
    const { username, email, password, reg_no, assign_to, confirmPasword } = req.body;
    if(!username || typeof username !== 'string'){
        return res.status(400).send({
            message: 'Username is required'
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
})