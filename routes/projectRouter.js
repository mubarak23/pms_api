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


    bookRouter.route('/project/:bookID')
.get((req, res) =>{
    const book_id = req.params.bookID;
    //return book_id;
    Book.findById(book_id, (error, book) =>{
        if(error){
            const response = {
                "message": 'nable to find book with the targeted id',
                "success": false,
                "status": 401
            };
           return res.json(response);
        }
        const response = {
            "message": ' Book with ID Retrieved',
            "success": true,
            "data": book,
            "status": 200
        };
       return res.json(response);
    })
});
return bookRouter;

}