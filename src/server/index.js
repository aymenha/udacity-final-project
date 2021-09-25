let projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Middleware*/
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// // Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// // Initialize the main project folder
app.use(express.static('dist'))

const port = 3000;

// // Setup Server

const server = app.listen(port, listening);
function listening() {
  console.log(`running on localhost: ${port}`);
}

// GET route
app.get("/get", sendData);
function sendData(req, res) {
  res.send(projectData);
}

// POST route
app.post("/post", addWeather);
function addWeather(req, res) {
  projectData = {
    city: req.body.city,
    temperature: req.body.temperature,
    feelings: req.body.feelings,
    date: req.body.date,
  };
  res.send(projectData);
}