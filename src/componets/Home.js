import React, { useEffect, useState } from 'react';
import "./styles.css";
import * as Constants from '../constants';
import MeetingRoomsDetails from './MeetingRoomsDetails';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Home = () => {
  const [datas, setData] = useState([]);
  const [buildingName, setBuildingName] = useState("");

  useEffect(()=>{
    // call GraphQl API and update component state with the result
    fetch(Constants.GRAPHQL_API, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ query: Constants.GET_MEETING_ROOM_QUERY })
    }).then(response => response.json())
    .then(data => setData(data.data.Buildings)) //array
  },[buildingName]);

  return (
    <>
      <div className="home">
        <h4 className="heading">Please select the building</h4>
        <div className="select-box">
          <select className="form-select form-select-lg mb-3" onChange={(e)=>{setBuildingName(e.target.value)}}>
            <option selected>Open this select menu</option>
            {datas.map((data)=> {
              return <option name={data.name}>{data.name}</option>
            })}
          </select>
        </div>
      </div>
      { buildingName===""? <div className="text-content">No Building Selected</div>:
      <div className="home-content">
        <div className="text-content">Showing Meeting Rooms For <span><i>{buildingName}</i></span></div>
        <MeetingRoomsDetails buildingName={buildingName} roomsDetails={datas}/>
      </div>
      }
      <div className="add-button">
        <Link to='/addMeeting'>
          <Button>
            Add a Meeting
          </Button>
        </Link>
      </div>
    </>
  )
}

export default Home