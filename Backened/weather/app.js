fetch(
  "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=XXXXXXXXXXXX&longitude=XXXXXXXXXXXX&localityLanguage=en"
)
  .then((res) => {
    if (!res.ok) {
      throw new Error("Error");
    }
    return res.json();
  })
  .then((data) => {
    let location = data.locality;
    console.log(location);

    fetch(`https://goweather.herokuapp.com/weather/${location}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error 2");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);

        document.querySelector(
          ".location"
        ).innerHTML = ` Location: ${location}`;
        document.querySelector(
          ".temperature"
        ).innerHTML = `Temperature: ${data.temperature}`;
        document.querySelector(".wind").innerHTML = `Wind: ${data.wind}`;
      })
      .catch((error) => console.log(error));
  })
  .catch((error) => console.log(error));
