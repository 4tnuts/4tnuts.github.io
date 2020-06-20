let darkButton = document.getElementById("dark");
let lightButton = document.getElementById("light");
let body = document.getElementsByTagName("body");
let dateTime = new Date();
let timeHour = dateTime.getHours();

const toDark = () => {
  body[0].classList.add("dark");
  body[0].classList.remove("light");
};

const toLight = () => {
  body[0].classList.add("light");
  body[0].classList.remove("dark");
};

if (timeHour >= 18) {
  toDark();
} else {
  toLight();
}

darkButton.onclick = () => {
  toDark();
};

lightButton.onclick = () => {
  toLight();
};
