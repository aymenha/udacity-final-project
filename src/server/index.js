
var path = require("path");
const express = require("express");
require("dotenv").config();
const fetch = require("node-fetch");

const geoUser = process.env.GEO_API_USER;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  //   res.sendFile(path.resolve("dist/index.html"));
});

const cors = require("cors");
app.use(cors());

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});


app.post("/geo", async function (req, res) {
  const apiURL = `http://api.geonames.org/search?q=${city}&maxRows=1&type=json&username=${geoUser}`;
  try {
    const res = await fetch(apiURL);
    const data = await res.json();
    console.log(data.countryName);

    return {
      lng: data.lng,
      lat: data.lat,
      country: data.countryName,
    };
  } catch (err) {
    console.log('Error: ', err);
  }
});

// // GET route
// app.get("/get", sendData);
// function sendData(req, res) {
//   res.send(projectData);
// }

// // POST route
// app.post("/post", addWeather);
// function addWeather(req, res) {
//   projectData = {
//     city: req.body.city,
//     temperature: req.body.temperature,
//     feelings: req.body.feelings,
//     date: req.body.date,
//   };
//   res.send(projectData);
//   console.log(projectData);
// }
