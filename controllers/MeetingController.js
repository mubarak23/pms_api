const Meeting = require('../model/meetingModel');


const MeetingController = {
    createMeeting(req, next, res){
        Meeting.create(req.body)
        .then(meeting =>{
            return res.status(200).send({
                message: `Meeting Created Successful ${meeting.created_by}`
            })
        })
        .catch(err => next(err));
    }
}


module.exports = MeetingController