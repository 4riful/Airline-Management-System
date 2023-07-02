const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightController');

// Retrieve all flights
router.get('/', flightController.getAllFlights);

// Create a new flight
router.post('/', flightController.createFlight);

// Update a flight
router.put('/:id', flightController.updateFlight);

// Delete a flight
router.delete('/:id', flightController.deleteFlight);

module.exports = router;
