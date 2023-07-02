// flightModel.js

class Flight {
    constructor(airline, flightNumber, source, destination, departureTime, arrivalTime) {
      this.airline = airline;
      this.flightNumber = flightNumber;
      this.source = source;
      this.destination = destination;
      this.departureTime = departureTime;
      this.arrivalTime = arrivalTime;
    }
  }
  
  module.exports = Flight;
  