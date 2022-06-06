export const GRAPHQL_API = "http://smart-meeting.herokuapp.com/graphql";

export const GET_MEETING_ROOM_QUERY = `
{
    Buildings {
        name 
        meetingRooms {
            name 
            meetings {
                title
                date 
                startTime 
                endTime
            }   
        }
    } 
}
`;

export const MEETING_ROOM_DETAILS = `
{
    MeetingRooms {
        name 
        floor
        building {
            name
        }
    } 
}
`;

export const GET_ROOM_DETAILS = `
{
    Buildings {
        name 
        meetingRooms {
            name
        }
    } 
}
`;

export const ADD_MEETING_DETAILS = `
{
    Meeting(
        id 
        title
        date
        startTime
        endTime
        meetingRoom
    ){
        id
        title
    }
}
`;