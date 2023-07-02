const mysql = require('mysql');
const pool = require('../config');

// Retrieve all flights
exports.getAllFlights = (req, res) => {
  pool.query('SELECT * FROM flights', (err, results) => {
    if (err) {
      console.error('Error retrieving flights:', err);
      res.status(500).json({ error: 'Failed to retrieve flights' });
    } else {
      res.json(results);
    }
  });
};

// Create a new flight
exports.createFlight = (req, res) => {
  const { airline, flightNumber, origin, destination, departureTime, arrivalTime } = req.body;
  const flight = {
    airline,
    flightNumber,
    origin,
    destination,
    departureTime,
    arrivalTime,
  };

  pool.query('INSERT INTO flights SET ?', flight, (err, result) => {
    if (err) {
      console.error('Error creating flight:', err);
      res.status(400).json({ error: 'Failed to create flight' });
    } else {
      flight.id = result.insertId;
      res.status(201).json(flight);
    }
  });
};

// Update a flight
exports.updateFlight = (req, res) => {
    const flightId = req.params.id;
    const { airline, flightNumber, origin, destination, departureTime, arrivalTime } = req.body;
  
    // Convert departureTime and arrivalTime to the correct format
    const formattedDepartureTime = new Date(departureTime).toISOString().slice(0, 19).replace('T', ' ');
    const formattedArrivalTime = new Date(arrivalTime).toISOString().slice(0, 19).replace('T', ' ');
  
    const flight = {
      airline,
      flightNumber,
      origin,
      destination,
      departureTime: formattedDepartureTime,
      arrivalTime: formattedArrivalTime,
    };
  
    pool.query('UPDATE flights SET ? WHERE id = ?', [flight, flightId], (err, result) => {
      if (err) {
        console.error('Error updating flight:', err);
        res.status(400).json({ error: 'Failed to update flight' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Flight not found' });
      } else {
        flight.id = flightId;
        res.json(flight);
      }
    });
  };
  
// Delete a flight
exports.deleteFlight = (req, res) => {
  const flightId = req.params.id;

  pool.query('DELETE FROM flights WHERE id = ?', flightId, (err, result) => {
    if (err) {
      console.error('Error deleting flight:', err);
      res.status(400).json({ error: 'Failed to delete flight' });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Flight not found' });
    } else {
      res.json({ message: 'Flight deleted successfully' });
    }
  });
};
