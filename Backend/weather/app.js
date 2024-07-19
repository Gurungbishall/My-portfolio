// fetch(
//   "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=XXXXXXXXXXXX&longitude=XXXXXXXXXXXX&localityLanguage=en"
// )
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error("Error");
//     }
//     return res.json();
//   })
//   .then((data) => {
//     let location = data.locality;
//     console.log(location);

//     fetch(`https://goweather.herokuapp.com/weather/${location}`)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Error 2");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);

//         document.querySelector(
//           ".location"
//         ).innerHTML = ` Location: ${location}`;
//         document.querySelector(
//           ".temperature"
//         ).innerHTML = `Temperature: ${data.temperature}`;
//         document.querySelector(".wind").innerHTML = `Wind: ${data.wind}`;
//       })
//       .catch((error) => console.log(error));
//   })
//   .catch((error) => console.log(error));

var xhr1 = new XMLHttpRequest();

var location_Url =
  "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=XXXXXXXXXXXX&longitude=XXXXXXXXXXXX&localityLanguage=en";

xhr1.open("GET", location_Url, true);

xhr1.onload = function () {
  if (xhr1.status >= 200 && xhr1.status < 400) {
    var data = JSON.parse(xhr1.responseText);
    console.log(data);
    let location = data.locality;

    var xhr2 = new XMLHttpRequest();

    var weather_Url = `https://goweather.herokuapp.com/weather/${location}`;

    xhr2.open("GET", weather_Url, true);

    xhr2.onload = function () {
      if (xhr2.status >= 200 && xhr2.status < 400) {
        var data = JSON.parse(xhr2.responseText);
        console.log(data);
        document.querySelector(
          ".location"
        ).innerHTML = ` Location: ${location}`;
        document.querySelector(
          ".temperature"
        ).innerHTML = `Temperature: ${data.temperature}`;
        document.querySelector(".wind").innerHTML = `Wind: ${data.wind}`;
      } else {
        console.error("Request failed with status:", xhr2.status);
      }
    };

    xhr2.onerror = function () {
      console.error("XHR request failed");
    };

    xhr2.send();
  } else {
    console.error("Request failed with status:", xhr1.status);
  }
};

xhr1.onerror = function () {
  console.error("XHR request failed");
};

xhr1.send();
