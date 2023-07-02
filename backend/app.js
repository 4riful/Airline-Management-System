const mysql = require('mysql');
const config = require('./config');
const cors = require('cors');
// Create a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'anik2442',
  database: 'flight_app',
});
const bodyParser = require('body-parser');
const flightRoutes = require('./routes/flightRoutes');

// Add CORS middleware
// Assuming you are using Express.js
const express = require('express');
const app = express();

// Add CORS middleware
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow the specified HTTP methods
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // Allow the specified headers
  next();
});


// Middleware
app.use(bodyParser.json());

// Routes
app.use('/flights', flightRoutes);
app.use(cors());
// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});