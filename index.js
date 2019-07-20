const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodypaser = require('body-parser');
 
const app = express();
app.use(bodyParser.urlencoded({ extended: true}));

require('./app/routes')(app, {});
const port = 3000;
app.listen(port, ( )=>{
    console.log('we are live on port' + port);
})
