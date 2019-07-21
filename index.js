const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodypaser = require('body-parser');
const db = require('./config/db');

const app = express();
app.use(bodypaser.urlencoded({ extended: true}));
const port = 3000;
MongoClient.connect(db.url, { useNewUrlParser: true },  (err, database)=>{
    if(err) return console.log(err);
    require('./app/routes')(app, database);
app.listen(port, ( )=>{
    console.log('we are live on port' + port);
    })

    
})


