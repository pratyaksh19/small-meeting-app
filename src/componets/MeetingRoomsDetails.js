import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const MeetingRoomsDetails = (prop) => {

  return (
    <div className='meeting-details'>
        <Card style={{ width: '30rem' }}>
            <Card.Body>
                <Card.Title>{prop.buildingName}</Card.Title>
                <Card.Text>Meeting Rooms Information</Card.Text>
            </Card.Body>
            <ListGroup variant="flush">
                {
                    prop.roomsDetails.map((rooms)=> (
                        <>
                            {rooms.name === prop.buildingName && rooms.meetingRooms.length !== 0 ? rooms.meetingRooms.map((item) => (
                                <ListGroup.Item>{item.name}</ListGroup.Item>
                              )
                            ): <div className="no-rooms">No Room</div> }
                        </>
                    )
                  )
                }
            </ListGroup>
        </Card>
    </div>
  )
}

export default MeetingRoomsDetails