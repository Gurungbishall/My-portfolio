let scrollContainer = document.querySelector(".Service_bottom_project");
let backbtn = document.getElementById("left");
let nextbtn = document.getElementById("right");

scrollContainer.addEventListener("wheel", (event) => {
  event.preventDefault();
  scrollContainer.scrollLeft += event.deltaY;
});

nextbtn.addEventListener("click", () => {
  scrollContainer.scrollLeft += 623;
});

backbtn.addEventListener("click", () => {
  scrollContainer.scrollLeft -= 623;
});
