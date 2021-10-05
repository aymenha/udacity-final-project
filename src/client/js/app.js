let d = new Date();
let date = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();
const cityResult = document.getElementById("inputCity");

document.getElementById("generate").addEventListener("click", getCityName);

export function getCityName(event) {
  event.preventDefault();

  fetch("http://localhost:8081/geo", {
    method: "POST",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ city: cityResult }),
  })
    .then((res) => res.json())
    .then(function (res) {
      console.log(res);
      try {
        document.getElementById("latitud").innerHTML = `${res.city.lat}`;
        document.getElementById("longitud").innerHTML = `${res.city.lng}`;
        document.getElementById("name").innerHTML = `${res.city.name}`;
      } catch (error) {
        console.log("error", error);
      }
    });
}
