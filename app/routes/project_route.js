var ObjectID = require('mongodb').ObjectID; 
module.exports = function(app, db){
 app.post('/api/v1/project/create', (req, res) =>{
     const project = {title: req.body.title,
         description:req.body.description,
        assign_student: req.body.assign_student,
        assign_supervisor: req.body.assign_supervisor,
        create_date: (new Date(Date.now()).toISOString())};
        //let db = client.db("nodehome");
     db.collection("projects").insert(project, (err, result) =>{
         if(err){
             res.send({"error": "An error has Occured"});
         }else{
             res.send(result.ops[0]);
         }
     });
 });
//get a single project detail
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

//delete project

}