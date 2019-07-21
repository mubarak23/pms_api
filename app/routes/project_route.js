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
 })
 //^3.2.7   
 //^2.2.33
}