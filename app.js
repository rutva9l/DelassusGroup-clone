const hamburger = document.getElementById("hamburger");
const hamburgerDiv = document.querySelectorAll("#hamburger div");
const menuBack = document.querySelector(".menuBackground");
const tomatoes = document.getElementById("tomatoes");
const oranges = document.getElementById("oranges");
const grapes = document.getElementById("grapes");
const avocados = document.getElementById("avocados");
const flowers = document.getElementById("flowers");
const showcase = document.querySelector(".showcase");
const image = document.querySelectorAll(".showcase img");
const menuContainer = document.querySelector(".menuContainer");
const dash = document.querySelectorAll(".dash");
const moveDash = document.querySelectorAll(".moveDash");

let count=0;
let flag=false;
window.onload=function(){
    runBar();
}
function runBar(){
    if(flag==true){
        dash[4].classList.remove("show");
    }
    if(count>0){
        dash[count-1].classList.remove("show");
    }
    dash[count].classList.add("show");
    count++
    if(count==5){
        count=0;
        flag=true;
    }
}
setInterval(runBar,6000)
hamburger.addEventListener("click", function () {
    menuContainer.classList.toggle("hide");
    menuBack.classList.toggle("openMenu");
    hamburger.classList.toggle("open");
    for(let i=3;i<6;i++){
        hamburgerDiv[i].classList.toggle("none");
    }
})
tomatoes.addEventListener("mouseover", function () {
    showcase.style.background = "#fe443e"
    for (let i = 0; i < 3; i++) {
        image[i].style.transform = "translateY(0)";
    }
})
tomatoes.addEventListener("mouseout", function () {
    for (let i = 0; i < 3; i++) {
        image[i].style.transform = "translateY(490px)";
    }
})
oranges.addEventListener("mouseover", function () {
    showcase.style.background = "#ff6700"
    for (let i = 3; i < 7; i++) {
        image[i].style.transform = "translateY(0)";
    }
})
oranges.addEventListener("mouseout", function () {
    for (let i = 3; i < 7; i++) {
        image[i].style.transform = "translateY(490px)";
    }
})
grapes.addEventListener("mouseover", function () {
    showcase.style.background = "#ff6d8b";
    for (let i = 7; i < 9; i++) {
        image[i].style.transform = "translateY(0)";
    }
})
grapes.addEventListener("mouseout", function () {
    for (let i = 7; i < 9; i++) {
        image[i].style.transform = "translateY(490px)";
    }
})
avocados.addEventListener("mouseover", function () {
    showcase.style.background = "#6dd5bc";
    for (let i = 9; i < 12; i++) {
        image[i].style.transform = "translateY(0)";
    }
})
avocados.addEventListener("mouseout", function () {
    for (let i = 9; i < 12; i++) {
        image[i].style.transform = "translateY(490px)";
    }
})
flowers.addEventListener("mouseover", function () {
    showcase.style.background = "#ffd000";
    for (let i = 12; i < 14; i++) {
        image[i].style.transform = "translateY(0)";
    }
})
flowers.addEventListener("mouseout", function () {
    for (let i = 12; i < 14; i++) {
        image[i].style.transform = "translateY(490px)";
    }
})