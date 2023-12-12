const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/appointments', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Appointment Schema
const appointmentSchema = new mongoose.Schema({
  name: String,
  date: Date,
  time: String,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

app.use(bodyParser.json());

// API Endpoint to Get Appointments
app.get('/api/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API Endpoint to Book Appointment
app.post('/api/appointments', async (req, res) => {
  const { name, date, time } = req.body;

  try {
    const newAppointment = new Appointment({ name, date, time });
    await newAppointment.save();
    res.json({ message: 'Appointment booked successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

