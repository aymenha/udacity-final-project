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

      try {
        document.getElementById("date").innerHTML = inputDate;
        document.getElementById(
          "latitud"
        ).innerHTML = `${res.latitud}`;
        document.getElementById(
          "longitud"
        ).innerHTML = `${res.long}`;
        document.getElementById(
          "name"
        ).innerHTML = `${res.name}`;
      } catch (error) {
        console.log("error", error);
      }
    });
}

document.getElementById("generate").addEventListener("click", getCityName);
