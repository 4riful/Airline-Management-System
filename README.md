# Flight Management

Welcome to the Flight Management project! This project consists of a Flight Management API and a corresponding frontend application.

## Backend API

The backend API provides various endpoints to manage and retrieve flight information. It is built using [Node.js](https://nodejs.org/) and [Express](https://expressjs.com/). The API allows you to perform CRUD operations (Create, Read, Update, Delete) on flights.

### Base URL

The base URL for all API endpoints is: `http://localhost:3000`

### API Endpoints

#### Retrieve All Flights

- URL: `/flights`
- Method: GET
- Description: Retrieves all flights.
- Response: Array of flight objects.

#### Retrieve a Flight by ID

- URL: `/flights/{id}`
- Method: GET
- Description: Retrieves a specific flight by its ID.
- Parameters: `{id}` is the ID of the flight.
- Response: Flight object.

#### Add a New Flight

- URL: `/flights`
- Method: POST
- Description: Adds a new flight.
- Request Body: Flight object with the following properties: airline, flightNumber, origin, destination, departureTime, arrivalTime.
- Response: Newly created flight object.

#### Update a Flight

- URL: `/flights/{id}`
- Method: PUT
- Description: Updates a specific flight by its ID.
- Parameters: `{id}` is the ID of the flight.
- Request Body: Flight object with the updated properties.
- Response: Updated flight object.

#### Delete a Flight

- URL: `/flights/{id}`
- Method: DELETE
- Description: Deletes a specific flight by its ID.
- Parameters: `{id}` is the ID of the flight.
- Response: Success message.

### Setting Up the Backend

- Create a new database 
CREATE DATABASE flight_app;

- Create a new user and grant privileges
CREATE USER 'flight_user'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON flight_app.* TO 'flight_user'@'localhost';
FLUSH PRIVILEGES;

- Install MySQL Package: 
`npm install mysql`

- open up `app.js` and change the database configuration



1. Clone the repository: `https://github.com/4riful/Airline-Management-System.git`
2. Navigate to the backend directory: `cd /Airline-Management-System/backend`
3. Install the required dependencies: `npm install`
4. Start the server: `npm start`

## Frontend Application

The frontend application provides a user-friendly interface to interact with the Flight Management API. It is built using HTML, CSS, and JavaScript. The application allows you to add, update, and delete flights, as well as search for flights based on origin and destination.

### Setting Up the Frontend

1. Clone the repository: `https://github.com/4riful/Airline-Management-System.git`
2. Navigate to the frontend directory: `cd /Airline-Management-Systemfrontend`
3. Start a server for frontend `python -m http.server 8080`

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Release Notes

- **v1.0.0** - Initial release.

## Future Updates

We have exciting plans for future updates, including the following features and enhancements:

- User authentication and authorization
- Flight booking functionality
- Improved search and filtering options
- Enhanced user interface and user experience

Stay tuned for more updates!

