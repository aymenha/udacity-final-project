let d = new Date();
let date = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

export function getCityName(event) {
  event.preventDefault();

  const cityResult = document.getElementById("cityName");
  const city = cityResult.value;

  console.log("asldkfl" + city);

  fetch("http://localhost:8081/geo", {
    method: "POST",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: city }),
  })
    .then((res) => res.json())
    .then(function (res) {
      console.log(res.data.geonames[0].lat);
      try {
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
