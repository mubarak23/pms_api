const express = express();
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
                "message": "Unable to find a book",
                "data": meetings
            });
        });
    })
}