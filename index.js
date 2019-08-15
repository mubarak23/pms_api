const express = require("express");
const mongoes = require('mongoose');
const bodyParser = require('body-parser');
const Project = require('./model/projectModel');
const Meeting = require('./model/meetingModel');
const User = require('./model/userModel');
const projectRouter = require('./routes/projectRouter')(Project);
const meetingRouter = require('./routes/meetingRouter')(Meeting);
const userRouter = require('./routes/usersRouter')(User);
const routes = require('./routes/routes');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if(process.env.NODE_ENV = 'development'){
    app.use((req, res, next) =>{
        res.header('Access-Control-Allow-Origin', '*');
        res.header(
            'Access-Control-Allow-Methods',
            'POST, GET, PUT, DELETE, HEAD'
        );
        res.header(
            'Access-Control-Allow-Headers',
            'Authorization. X-PINGOTHER, Origin, X-Requested-with, Content-Type, Accept, x-access-token'
        );
        next();
    })
}

const db = mongoes.connect("mongodb://root:root123@ds251240.mlab.com:51240/nodehome",
 {useNewUrlParser: true },
  (error) =>{
    if(error){
        console.log('internal server error with mlab ');
    }else{
        console.log('Mongooes is connected to mlab DB');
    }
 });

 var port = process.env.PORT||3000;


 //wiring the book router to our app
 app.use('/api', projectRouter);
app.use('/api', meetingRouter); 
app.use('/api', userRouter); 
 app.get('/', (req, res) =>{
     res.send('Welcome to library resfull api');
 });
 
 app.use('/api/v1', routes);


 app.listen(port, () =>{
     console.log('Running on port ' + port);
 })


