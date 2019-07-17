const project_route = require('./project_route');


module.exports = function(app, db){
    project_route(app, db);
}