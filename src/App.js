import React, { useState } from "react";
import "./App.css";
import Calendar from "./Calendar";

const Events = ({ events, onAddEvent }) => {
  const [newEvent, setNewEvent] = useState("");

  const handleAddEvent = () => {
    if (newEvent.trim() !== "") {
      onAddEvent(newEvent);
      setNewEvent("");
    }
  };

  return (
    <div className="events">
      <h3>Events</h3>
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newEvent}
          onChange={(e) => setNewEvent(e.target.value)}
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
    </div>
  );
};



const App = () => {
  const [events, setEvents] = useState([]);
  const [calendarOptions, setCalendarOptions] = useState({});

  const handleDropdownChange = (options) => {
    setCalendarOptions((prevOptions) => ({ ...prevOptions, ...options }));
  };

  const handleAddEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };


  return (
    <div className="container">
      <div className="left-side">
        <Events events={events} onAddEvent={handleAddEvent} />
        
      </div>
      <div className="right-side">
        <div className="main">
          <Calendar {...calendarOptions} events={events} />
        </div>
      </div>
    </div>
  );
};

export default App;
