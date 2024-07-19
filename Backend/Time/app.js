setInterval(() => {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let amPm = "";

  if (hours > 12) {
    hours = hours - 12;
    amPm = "PM";
  } else if (hours == 0) {
    hours = 12;
    amPm = "AM";
  } else {
    amPm = "AM";
  }

  hours = hours > 9 ? hours : "0" + hours;
  minutes = minutes > 9 ? minutes : "0" + minutes;

  document.getElementById(
    "current_time"
  ).innerHTML = `Time: ${hours}:${minutes} ${amPm}`;

  let year = time.getFullYear();
  let months = time.getMonth();
  let days = time.getDate();

  months = months + 1;

  document.getElementById(
    "current_date"
  ).innerHTML = `Date: ${days}-${months}-${year} AD`;
}, 1000);
