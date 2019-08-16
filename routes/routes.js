const express = require('express');
const  validateInput = require('../middleware/validateInput');
const UserController = require( '../controllers/UserController');
const MeetingController = require('../controllers/MeetingController');
const ProjectController = require('../controllers/ProjectController');

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
.post(
    '/meeting/createMeeting',
    validateInput.createMeeting,
    MeetingController.createMeeting
)
.post(
    '/project/createProject',
    validateInput.createProject,
    ProjectController.createProject
)
module.exports = router;