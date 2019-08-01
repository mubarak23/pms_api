const express = require('express');
const meetingRouter = express.Router();

function routes(Meeting){
    meetingRouter.route('/meeting')
    .post((req, res) =>{
        const meeting = new Meeting(req.body);
        meeting.save();
        return res.status(201).json(meeting);
    })
    .get((req, res) =>{
        Meeting.find((error, meetings) =>{
            if(error){
                return res.status(401).json({
                    "message": "Internal Server Error",
                });
            }
            return res.status(401).json({
                "message": "List of meetings",
                "data": meetings
            });
        });
    });

    meetingRouter.route('/meeting/:meetingID')
    .get((req, res) =>{
        const meetingId = req.params.meetingID;
        Meeting.findById(meetingId, (error, meeting) =>{
            if(error){
                return res.status(401).json({
                    "message": "Unable to find meeting Schedule with specify ID"
                });
            }
            return res.status(401).json({
                "message": "Meeting Details",
                "data": meeting
            });
        })
    })
    return meetingRouter;
}

module.exports = routes;