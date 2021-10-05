let d = new Date();
let date = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

document.getElementById("generate").addEventListener("click", getCityName);

export function getCityName(event) {
  event.preventDefault();

  let cityResult = document.getElementById("inputCity");

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
        document.getElementById("name").innerHTML = `${res.city.country}`;
      } catch (error) {
        console.log("error", error);
      }
    });
}

// export function performAction(e) {
//   const feelings = document.getElementById("feelings").value;
//   getWeather(baseURL, zip.value + ",", country.value, apiKey).then(function (
//     data
//   ) {
//     postData("http://localhost:8081/post", {
//       city: data.name,
//       temperature: data.main.temp,
//       feelings: feelings,
//       date,
//     });
//     newEntryData();
//   });
// }

// const getWeather = async (url, zip, country, key) => {
//   const res = await fetch(url + zip + country + key);
//   try {
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// const postData = async (url = "", data = {}) => {
//   console.log(data);
//   const response = await fetch(url, {
//     method: "POST",
//     credentials: "same-origin",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });

//   try {
//     const newData = await response.json();
//     return newData;
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// // create new entry with new data
// const newEntryData = async () => {
//   const request = await fetch("http://localhost:8081/get");
//   try {
//     const allData = await request.json();
//     document.getElementById("city").innerHTML = allData.city;
//     document.getElementById("temp").innerHTML = allData.temperature + " C°";
//     document.getElementById("feels").innerHTML = allData.feelings;
//     document.getElementById("date").innerHTML = allData.date;
//   } catch (error) {
//     console.log("error", error);
//   }
// };
