export function getCityName(event) {
  event.preventDefault();

  const cityResult = document.getElementById("cityName").value;
  const inputDate = document.getElementById("travelDate").value;

  if (!inputDate) {
    alert("Enter a date");
  } else if (!cityResult) {
    alert("Enter a city name");
  } else {
    console.log("asldkfl" + inputDate);

    fetch("http://localhost:8081/geo", {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: cityResult }),
    })
      .then((res) => res.json())
      .then(function (res) {
        try {
          document.getElementById(
            "entry-title"
          ).innerHTML = `<h2>Your trip to: ${res.name}, ${res.country}</h2>`;
          document.getElementById(
            "date"
          ).innerHTML = `Your trip is on: ${inputDate}`;
          document.getElementById("latitud").innerHTML = `${res.latitud}`;
          document.getElementById("longitud").innerHTML = `${res.long}`;
          document.getElementById(
            "timeZone"
          ).innerHTML = `<p>Temperature: ${res.temperature}, ${res.timezone}</p>`;
          document.getElementById(
            "city-image"
          ).innerHTML = `<img src=${res.backgroundImage} class="city-image" />`;
        } catch (error) {
          console.log("error", error);
        }
      });
  }
}

document.getElementById("generate").addEventListener("click", getCityName);
