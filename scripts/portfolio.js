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
let hideNav = document.querySelector(".nav-item");

window.addEventListener("resize", addHamburger);

function addHamburger() {
  let existingHamburger = document.getElementById("hamburger-icon");
  if (window.innerWidth < 600) {
    if (!existingHamburger) {
      let imgEle = document.createElement("img");
      //   console.log(typeof(imgEle))
      imgEle.src = hamburger;
      imgEle.id = "hamburger-icon";
      navBar.appendChild(imgEle);
      console.log("trigger");
    }
  } else {
    if (existingHamburger) {
      existingHamburger.remove();
    }
  }
  // show/hide element
  let hideNav = document.querySelector(".nav-item");
  if (window.innerWidth < 600) {
    hideNav.style.display = "none";
  } else {
    hideNav.style.display = "block";
  }
}
