import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from '../../Home';
import NavBarLeft from '../NavBarLeft';

function Appointment() {
  const [appointments, setAppointments] = useState([]);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    // Fetch appointments from the server
    axios.get('/api/appointments')
      .then(response => setAppointments(response.data))
      .catch(error => console.error('Error fetching appointments:', error));
  }, []);

  const handleBooking = () => {
    // Make a POST request to book an appointment
    axios.post('/api/appointments', { name, date, time })
      .then(response => {
        console.log(response.data.message);
        // Refresh the list of appointments
        axios.get('/api/appointments')
          .then(response => setAppointments(response.data))
          .catch(error => console.error('Error fetching appointments:', error));
      })
      .catch(error => console.error('Error booking appointment:', error));
  };

  return (
    <div className="App" style={{display:'flex',  marginTop:'50px'}}>
      <NavBarLeft></NavBarLeft>
      <div style={{margin:'100px'}}>
      <h1>Booking Appointments</h1>
      <div>
        <h2>Appointments</h2>
        {/* <ul>
          {appointments.map(appointment => (
            <li key={appointment._id}>
              {appointment.name} - {appointment.date} - {appointment.time}
            </li>
          ))}
        </ul> */}
      </div >
      <div >
        <h2>Book Appointment</h2>
        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input type="date" onChange={(e) => setDate(e.target.value)} />
        <input type="time" onChange={(e) => setTime(e.target.value)} />
        <button onClick={handleBooking}>Book Appointment</button>
      </div>
      </div>
    </div>
  );
}

export default Appointment;
