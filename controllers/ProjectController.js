const Project = require('../model/projectModel');

const ProjectController = {

    createProject(req, next, res){
        Project.create(req.body)
        .then(project =>{
            return res.status(401).send({
                message: `Project Created Successful by ${project.title}`
            })
        })
        .catch(err => next(err));
    }

}

module.exports = ProjectController