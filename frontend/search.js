document.getElementById('search-form').addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const origin = document.getElementById('search-origin').value;
  const destination = document.getElementById('search-destination').value;

  fetchFlights(origin, destination)
    .then(displayFlights)
    .catch(handleError);
}

function fetchFlights(origin, destination) {
    const url = `http://localhost:3000/flights?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`;
    return fetch(url)
      .then(response => response.json())
      .then(data => data)
      .catch(error => {
        throw new Error('Failed to fetch flights: ' + error.message);
      });
  }
  
  function displayFlights(flights) {
    const origin = document.getElementById('search-origin').value;
    const destination = document.getElementById('search-destination').value;
  
    const filteredFlights = flights.filter(flight =>
      flight.origin.toLowerCase() === origin.toLowerCase() &&
      flight.destination.toLowerCase() === destination.toLowerCase()
    );
  
    const tableBody = document.querySelector('#search-results tbody');
    tableBody.innerHTML = '';
  
    filteredFlights.forEach(flight => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${flight.airline}</td>
        <td>${flight.flightNumber}</td>
        <td>${flight.origin}</td>
        <td>${flight.destination}</td>
        <td>${flight.departureTime}</td>
        <td>${flight.arrivalTime}</td>
      `;
      tableBody.appendChild(row);
    });
  }
  
function handleError(error) {
  console.error(error);
  // Display an error message to the user, if needed
}
