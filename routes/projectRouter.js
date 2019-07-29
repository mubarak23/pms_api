const express = require('express');
const projectRouter = express.Router();

function routes (Project){
    projectRouter.route('/project')
    .post((req, res) =>{
        const project = new Project(req.body);
        project.save();
        return res.status(201).json(book);
    })
    .get((req, res) =>{
        Project.find((err, projects) =>{
            if(err){
        const response = {
            "message": 'Unable to find a book',
            "success": false,
            "status": 401
        };
        return res.status(401).json({
            "message": "Unable to find a book",
        });    
         }        
        
       return res.status(200).json({
           "message":"All Project from the pms",
           "data": projects
       });  
        });
    });

bookRouter.route('/project/:projectID')
.get((req, res) =>{
    const project_id = req.params.projectID;
    //return book_id;
    Book.findById(project_id, (error, project) =>{
        if(error){
           
           return res.status(401).json({
               "message": "unable to find project with the targeted id"
           });
        }
       return res.json({
           "message": "Project with ID Retrieved",
           "data": project
       });
    })
});
return bookRouter;

}
module.exports = routes;