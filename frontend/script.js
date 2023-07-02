document.addEventListener('DOMContentLoaded', function () {
  const flightsTable = document.getElementById('flights-body');
  const flightForm = document.getElementById('flight-form');

  
  // Function to fetch and display flights
  function fetchFlights() {
    fetch('http://localhost:3000/flights')
      .then((response) => response.json())
      .then((data) => {
        flightsTable.innerHTML = ''; // Clear existing flights

        data.forEach((flight) => {
          appendFlightRow(flight);
        });
      })
      .catch((error) => {
        console.error('Error fetching flights:', error);
      });
  }

  // Function to add a new flight
  function addFlight(event) {
    event.preventDefault();

    const formData = new FormData(flightForm);
    const flight = {
      airline: formData.get('airline'),
      flightNumber: formData.get('flightNumber'),
      origin: formData.get('origin'),
      destination: formData.get('destination'),
      departureTime: formData.get('departureTime'),
      arrivalTime: formData.get('arrivalTime'),
    };

    fetch('http://localhost:3000/flights', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(flight),
    })
      .then((response) => response.json())
      .then((data) => {
        flight.id = data.id;
        appendFlightRow(flight);
        flightForm.reset();
      })
      .catch((error) => {
        console.error('Error creating flight:', error);
      });
  }

  // Function to append a flight row to the table
  function appendFlightRow(flight) {
    const row = document.createElement('tr');
    row.dataset.flightId = flight.id;
    row.innerHTML = `
      <td>${flight.airline}</td>
      <td>${flight.flightNumber}</td>
      <td>${flight.origin}</td>
      <td>${flight.destination}</td>
      <td>${flight.departureTime}</td>
      <td>${flight.arrivalTime}</td>
      <td>
        <button onclick="deleteFlight(${flight.id})">Delete</button>
      </td>
    `;
    flightsTable.appendChild(row);
  }
  

  // Event listener for form submission
  flightForm.addEventListener('submit', addFlight);

  // Initial fetch of flights
  fetchFlights();
});
