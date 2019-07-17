const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodypaser = require('body-parser');
 
const app = express();
require('./app/routes')(app, {});
const port = 6000;
app.listen(port, ( )=>{
    console.log('we are live on port' + port);
})
