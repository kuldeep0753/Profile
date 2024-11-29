"use strict";
// alert("Hi! Welcome to my portfolio");
let toggleDay = document.querySelector(".day-night");
let nightImagePath = "assets/images/night.svg";
let dayImagePath = "assets/images/sun.svg";
let commonStyle = document.querySelector("body").style;
commonStyle.backgroundColor = "white";
console.log(toggleDay);
toggleDay.addEventListener("click", function () {
  console.log(commonStyle.backgroundColor);
  if (commonStyle.backgroundColor === "white") {
    commonStyle.backgroundColor = "black";
    commonStyle.color = "white";
    this.src = nightImagePath;
  } else {
    commonStyle.backgroundColor = "white";
    commonStyle.color = "black";
    this.src = dayImagePath;
  }
});

//2.

let hamburger = "assets/images/hamburger.svg";
let navBar = document.querySelector(".navbar");
window.addEventListener("resize", function () {
  console.log("trigger");
  let hideNav = document.querySelector(".nav-item");
  if (window.innerWidth < 600) {
    hideNav.style.display = "none";
  } else {
    hideNav.style.display = "block";
  }
});
if (window.innerWidth < 600) {
  function addHamburger() {
    let imgEle = document.createElement("img");
    imgEle.src = hamburger;
    navBar.appendChild(imgEle);
  }
  addHamburger()
}
