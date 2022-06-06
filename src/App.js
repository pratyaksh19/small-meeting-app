import './App.css';
import Home from './componets/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddMeeting from './componets/AddMeeting';
import ShowMeetings from './componets/ShowMeetings';

function App() {
  return (
    <>
      <h2 className="title">Meeting Room Booking App</h2>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addMeeting" element={<AddMeeting />} />
          <Route exact path="/showMeetingRooms" element={<ShowMeetings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
