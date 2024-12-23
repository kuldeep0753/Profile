"use strict";

let toggleDay = document.querySelector(".day-night");
let nightImagePath = "assets/images/moon.svg";
let dayImagePath = "assets/images/sunny.svg";
let commonStyle = document.querySelector("body").style;
commonStyle.backgroundColor = "white";
console.log(toggleDay);
toggleDay.addEventListener("click", function () {
  console.log(commonStyle.backgroundColor);
  if (commonStyle.backgroundColor === "white") {
    commonStyle.backgroundColor = "black";
    commonStyle.color = "white";
    this.src = dayImagePath;
  } else {
    commonStyle.backgroundColor = "white";
    commonStyle.color = "black";
    this.src = nightImagePath;
  }
});

//2.

let hamburger = "assets/images/hamburger.svg";
let navBar = document.querySelector(".navbar");
let hideNav = document.querySelector(".nav-item");

//Show and hide cross button
let closeBtn = document.querySelector(".top-close-accordian");
closeBtn.style.display = "none";

window.addEventListener("resize", addHamburger);

//Call when page load default
addHamburger();

function addHamburger() {
  // show/hide element

  let existingHamburger = document.getElementById("hamburger-icon");
  if (window.innerWidth < 600) {
    hideNav.style.display = "none";
    if (!existingHamburger) {
      createHamburgerImg();

      let selectImgId = document.querySelector("#hamburger-icon");
      //Click event on Hamburger
      selectImgId.addEventListener("click", function clickHamburger() {
        console.log("open");
        hideNav.style.display = "block";
        closeBtn.style.display = "block";
        selectImgId.style.display = "none";
      });
      closeBtn.addEventListener("click", () => {
        console.log("close");
        hideNav.style.display = "none";
        selectImgId.style.display = "block";
        closeBtn.style.display = "none";
      });
    }
  } else {
    hideNav.style.display = "block";
    closeBtn.style.display="none";
    if (existingHamburger) {
      existingHamburger.remove();
    }
  }
}

//Creating image tag
function createHamburgerImg() {
  let imgEle = document.createElement("img");
  imgEle.src = hamburger;
  imgEle.id = "hamburger-icon";
  navBar.appendChild(imgEle);
  console.log("trigger");
}

//Projects rendering 
const projects = [
    { title: "E-commerce-apnaBazar",link: "https://apnabazarhai.netlify.app/", description: "Apna Bazar is an e-commerce platform where users can log in, explore products, and make purchases." },
    { title: "Society Market",link: "https://society-market.netlify.app/", description: "E-commerce website with secure intergration of payment method" },
    { title: "Music-Player",link: "https://ganabazado.netlify.app/", description: "Sing song for lighten the mood" },
];

const selectProjectList = document.querySelector(".projects");

projects.forEach(function projects(index){
 const divEle = document.createElement("div");
 divEle.classList.add("project");
 const headEle3 =document.createElement("h3");
 
 const aEle = document.createElement("a");
 aEle.href = index.link;
 aEle.textContent = index.title;

 headEle3.appendChild(aEle);

 const pEle = document.createElement("p");
 pEle.textContent = index.description;

 divEle.appendChild(headEle3);
 divEle.appendChild(pEle);
 selectProjectList.appendChild(divEle);

})

//3.top to scroll
const scrollToTop = document.querySelector(".back-top");
// TODO: apply on window then only scroll listen else won't work
window.addEventListener("scroll",function(){
  // document.body.scrollTop > 200

  if(window.scrollY > 300){
    scrollToTop.style.display="block";
  }
  else{
    scrollToTop.style.display="none";
  }
})

scrollToTop.addEventListener('click',function(){ 
  window.scrollTo({
    top:100,
    behaviour:"smooth"
  })
})