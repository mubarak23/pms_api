var ObjectID = require('mongodb').ObjectID; 
module.exports = function(app, db){
 app.post('/api/v1/project/create', (req, res) =>{
     if(!req.body.title){
         return res.status(400).send({
             success: 'false',
             message: 'title is required'
         });
     }
     if(!req.body.description){
         return res.status(400).send({
             success: false,
             message: 'description is require'
         });
     }
     if(!req.body.assign_student){
         return res.status(400).send({
             success: false,
             message: 'Assign student is required'
         });
     }
     if(!req.body.assign_supervisor){
         return res.status(400).send({
             success: false,
             message: 'Assign Supervisor is required'
         });
     }
     const project = {title: req.body.title,
         description:req.body.description,
        assign_student: req.body.assign_student,
        assign_supervisor: req.body.assign_supervisor,
        create_date: (new Date(Date.now()).toISOString())};
        //let db = client.db("nodehome");
     db.collection("projects").insert(project, (err, result) =>{
         if(err){
             //res.send({"error": "An error has Occured"});
             return res.status(400).send({
                 success: false,
                 message: 'Internal Server Error'
             });
         }else{
             return res.status(400).send({
                 success: true,
                 message: 'New Project Created',
                 data: result.ops[0]
             }) 
             //res.send(result.ops[0]);
         }
     });
 });
//get a single project detail route
app.get('/api/v1/project/:id', (req, res) =>{
     const id = req.params.id;
     
     const details = {'_id':new ObjectID(id)};
     db.collection('projects').findOne(details, (err, item) =>{
         if(err){
             send.res({'error': 'An Error Has Occur'})
         }else{
             res.send(item);
         }

     });
});

//delete project route
app.delete('/api/v1/project/:id', (req, res) =>{
    const id = req.params.id;
    const details = {'_id': new ObjectID(id)};
    db.collection('projects').remove(details, (err, item) =>{
        if(err){
            send.res({'error': 'An Error Has Occur'});
        }else{
            res.send('Project ' + id + ' Deleted');
        }
    });
})

//update project
app.put('/api/v1/project/:id', (req, res) =>{
    const id = req.params.id;
    const details = {'_id': new ObjectID(id)};
    const project_update = {
        title: req.body.title,
        description: req.body.description,
        assign_student: req.body.assign_student,
        assign_supervisor: req.body.assign_supervisor,
        create_date:(new Date(Date.now()).toISOString())
    };
    db.collection('projects').updateOne(details, project_update, (err, item) =>{
        if(err){
            res.send({'error': 'An Error Has Occured'})
        }else{
            res.send(item);
        }
    })
})


}