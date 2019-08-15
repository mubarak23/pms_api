import express from 'express';
import validateInput from '../middleware/validateInput';
import UserController from '../controllers/UserController';

const router = express.Router();

router.get('/pms_api',(req, res) =>{
    res.status(200).send({
        message: 'Welcome to PMS API'
    });
})
.post(
    '/users/signup',
    validateInput.signup,
    UserController.createUser
)

export default router;