export function getCityName(event) {
  event.preventDefault();

  const cityResult = document.getElementById("cityName").value;
  const inputDate = document.getElementById("travelDate").value;

  console.log("asldkfl" + inputDate);

  fetch("http://localhost:8081/geo", {
    method: "POST",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: cityResult }),
  })
    .then((res) => res.json())
    .then(function (res) {
      console.log(res.data.geonames[0].lat);
      try {
        document.getElementById("date").innerHTML = inputDate;
        document.getElementById(
          "latitud"
        ).innerHTML = `${res.data.geonames[0].lat}`;
        document.getElementById(
          "longitud"
        ).innerHTML = `${res.data.geonames[0].lng}`;
        document.getElementById(
          "name"
        ).innerHTML = `${res.data.geonames[0].name}`;
      } catch (error) {
        console.log("error", error);
      }
    });
}

document.getElementById("generate").addEventListener("click", getCityName);
