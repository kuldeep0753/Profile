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

window.addEventListener("resize" || "load", addHamburger);

//Call when page load default
addHamburger();

function addHamburger() {
  // show/hide element
  if (window.innerWidth < 600) {
    hideNav.style.display = "none";
  } else {
    hideNav.style.display = "block";
  }

  let existingHamburger = document.getElementById("hamburger-icon");
  if (window.innerWidth < 600) {
    if (!existingHamburger) {
        createHamburgerImg()
        
      let selectImgId = document.querySelector("#hamburger-icon");
      selectImgId.addEventListener("click", () => {
        hideNav.style.display = "block";
      });
    }
  } else {
    if (existingHamburger) {
      existingHamburger.remove();
    }
  }
}
function createHamburgerImg(){
    let imgEle = document.createElement("img");
    imgEle.src = hamburger;
    imgEle.id = "hamburger-icon";
    navBar.appendChild(imgEle);
    console.log("trigger");
}

let click_Hamburger = document.getElementById("hamburger-icon");
let flag= true;
click_Hamburger.addEventListener("click", clickHamburger);
function clickHamburger() {
    if(flag){
        console.log("open");
        hideNav.style.display = "block";
        flag = false;
    }
    else{
        console.log("close");
        hideNav.style.display = "none";
        flag = true;
    }
    
}
