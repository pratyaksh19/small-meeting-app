import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddMeeting = () => {
    const [submitClicked, setSubmitState] = useState(false);
    const [values, setValues] = useState({
        date:"",
        startTime:"",
        endTime:"",
        building: "4"
    });

    let navigate = useNavigate();
    useEffect(() => {
        if(submitClicked) {
            navigate("/showMeetingRooms", {state: values});
        }
     },[submitClicked]);

    const submit = (e)=> {
        e.preventDefault(); //so that page should not be reloaded when we click submit
        console.log(values); //it has data to send via APIs
        setSubmitState(true);
    }

    return (
    <div className="container my-3">
    <h3>Please fill Meeting details</h3>
    <form onSubmit={submit}>
        <div className="mb-3">
            <label htmlFor="date" className="form-label">Date</label>
            <input type="date" value={values.date} onChange={(e)=>{setValues({...values,date:e.target.value})}} className="form-control" id="title" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="startTime" className="form-label">Start Time</label>
            <input type="time" value={values.startTime} onChange={(e)=>{setValues({...values,startTime:e.target.value})}} className="form-control" id="startTime" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="endTime" className="form-label">End Time</label>
            <input type="time" value={values.endTime} onChange={(e)=>{setValues({...values,endTime:e.target.value})}} className="form-control" id="endTime" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="building" className="form-label">Select Building</label>
            <select onChange={(e)=>{setValues({...values,building:e.target.value})}} className="form-control" id="building" required>
                <option value="4">Building 4</option>
                <option value="6">Building 6</option>
                <option value="8">Building 8</option>
            </select>
        </div>
        <button type="submit" className="btn btn-sm btn-success">Next</button>
    </form>
    </div>
    )
}

export default AddMeeting