import React, { useEffect, useState } from 'react';
import * as Constants from '../constants';
import { ListGroup } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const ShowMeetings = () => {
  const [datas, setData] = useState([]);
  const location = useLocation();
  console.log(location.state);

  useEffect(()=>{
    fetch(Constants.GRAPHQL_API, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ query: Constants.MEETING_ROOM_DETAILS })
    }).then(response => response.json())
    .then(data => setData(data.data.MeetingRooms))
  },[]);

  return (
      <>
        <h4>Please select one of the rooms</h4>
        <div className="show-meetings">
            <ListGroup>
                {datas.map((item)=>{
                    return (
                        <div className='select-item'>
                            <ListGroup.Item>{item.name}<br/><span> Floor </span>{item.floor}<br/>{item.building.name}</ListGroup.Item>
                        </div>
                    )
                })}
            </ListGroup>
        </div>
      </>
  )
}

export default ShowMeetings