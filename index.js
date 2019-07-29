const express = require("express");
const mongoes = require('mongoose');
const bodyParser = require('body-parser');
const Project = require('./model/projectModel');
const projectRouter = require('./routes/projectRouter')(Project);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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
 
 app.get('/', (req, res) =>{
     res.send('Welcome to library resfull api');
 });
 
 app.listen(port, () =>{
     console.log('Running on port ' + port);
 })


