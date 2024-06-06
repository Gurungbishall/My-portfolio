var w = document.documentElement.clientWidth || window.innerWidth;
if (w < 700) {
  const bar = document.getElementById("list");

  bar.addEventListener("click", () => {
    const bar_list = document.getElementById("bar_list");
    if (bar_list.style.display == "none") {
      bar_list.style.cssText = " display: grid";
    } else {
      bar_list.style.cssText = "display: none";
    }
  });
}

const validateEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
};

console.log(validateEmail("invalid-email"));

const form = document.getElementById("form");

const btn = document.getElementById("button");
const username = document.getElementById("Name");
const email = document.getElementById("Email");
const message = document.getElementById("Message");

if (form) {
  form.addEventListener("submit", (e) => {
    console.log(validateEmail(email.value));

    console.log(username.value, email.value, message.value);
    e.preventDefault();
  });
}
