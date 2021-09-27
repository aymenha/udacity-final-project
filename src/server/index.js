let projectData = {};

const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// // Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// // Initialize the main project folder
app.use(express.static("dist"));

const port = 8081;

// // Setup Server

const server = app.listen(port, listening);
function listening() {
  console.log(`running on localhost: ${port}`);
}

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  //   res.sendFile(path.resolve("dist/index.html"));
});

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
  console.log(projectData);
}
