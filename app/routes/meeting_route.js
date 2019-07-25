var ObjectId = require('mongodb').ObjectID;

module.exports  = function(app, db){

    //creatin meeting route
    app.post('/api/v1/meeting/create', (req, res) =>{
        if(!req.body.date){
            return res.status(401).send({
                success: false,
                message : 'Date is required before meeting can be set'
            });
        }

       if(!req.body.time){
           return res.status(401).send({
               success: false,
               message: 'Time is required before meeting can be set'
           });
       } 

       if(!req.body.location){
           return res.status(401).send({
               success: false,
               message: 'Location is required for a meeting can be set'
           });
       }

       if(!res.boy.created_by){
           return res.status(401).send({
               success: false,
               message: 'CreateBy filed is required '
           });
       }
      if(!res.body.with_student_by){
          return res.status(401).send({
              success: false,
              message : 'with student by is required',
          });
      } 
      const meeting_set = {
          date: req.body.date,
          time: req.body.time,
          location: req.body.location,
          created_by: req.body.created_by,
          with_student_by: req.body.with_student_by,
          create_at: (new Date(Date.now()).toISOString())  
      }
      db.collection('meetings').insert(meeting_set, (err, result)=>{
          if(err){
              return res.status(401).send({
                  success: false,
                  message: 'Internal Server Error',
              });
          }else{
              //send mail to student the meeting was created with
              return res.status(200).send({
                  success: true,
                  message: 'Set Meeting date Succeffully Created',
                  data: result.opt[0]
              })
          }
      })

    });


}