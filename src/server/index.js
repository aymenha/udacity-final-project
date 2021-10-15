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
  const city = req.body.cityResults;
  const mainUrl = await fetch(
    `http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=${geoUser}`
  );
  try {
    const data = await mainUrl.json();
    res.send(data);
    // data to be returned in "results"
    return {
      latitud: data.lat,
      long: data.lng,
      name: data.name,
    };
  } catch (error) {
    console.log("error", error);
  }
});
