const project_route = require('./project_route');
const meeting_route = require('./meeting_route');

module.exports = function(app, db){
    project_route(app, db);
    meeting_route(app, db);
}