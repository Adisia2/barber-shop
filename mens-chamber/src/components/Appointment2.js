import React, { useState } from "react";

const Appointment = (props) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [barber, setBarber] = useState("");

  const id = props.match.params.id;

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle submission of form data
  };

  return (
    <div>
      <h1>Make an Appointment for {id}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label>Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div>
          <label>Barber:</label>
          <select value={barber} onChange={(e) => setBarber(e.target.value)}>
            <option value="">Select a barber</option>
            <option value="Bob">Bob</option>
            <option value="Joe">Joe</option>
            <option value="Alice">Alice</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Appointment;
