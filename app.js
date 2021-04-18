const hamburger = document.getElementById("hamburger");
const menuBack = document.querySelector(".menuBackground");
const showcase = document.querySelector(".showcase");
const image = document.querySelectorAll(".showcase img");
const menuContainer = document.querySelector(".menuContainer");
const dash = document.querySelectorAll(".dash");
const moveDash = document.querySelectorAll(".moveDash");
const menuCircle = document.querySelector(".menuCircle");

let s=0;
let count = 0;
let prev, last;
let colorArray=["#fe443e","#ff6700","#ff6d8b","#6dd5bc","#ffd000"];
let colorArray2=["#ce0a1f","#ffb700","#870a31","#ff726d","#ff5400"];
window.onload = function () {
    second();
    runBarSlide();
     $(".navList").addClass("load");
     $(".discover").addClass("load");
}
function runBarSlide() {
    if (count > 0) {
        prev = count - 1;
        last = count - 2;
        $("." + prev).children().css({
            "transform": "translateX(-1538px)",
            "transition": "1s ease"
        });
        $("." + last).children().css({
            "transition": "none",
            "transform": "translateX(1538px)"
        });
        if (count == 5) {
            count = 0;
            $(".4").children().css({
                "transform": "translateX(-1538px)",
                "transition": "1s ease"
            });
            dash[4].classList.remove("show");
        }
    }
    $(".backgroundChange").css("background",colorArray[count]);
    // $(".total").click(function(e){
    //     let number=e.target.id;
    //     console.log(number);
    //     count=number;
    // })
    $("." + count).children("img").css({
        "transform": "translateX(0)",
        "transition": "1s ease"
    });
    $("." + count).children("div").css({
        "transform": "translateX(-50%)",
        "transition": "1s ease"
    });
    if (count > 0) {
        dash[count - 1].classList.remove("show");
    }
    dash[count].classList.add("show");
    count++
}
setInterval(runBarSlide, 6000)
hamburger.addEventListener("click", function () {
    menuContainer.classList.toggle("hide");
    menuBack.classList.toggle("openMenu");
    hamburger.classList.toggle("open");
    menuCircle.classList.toggle("openCircle");
})

//popping fruits in menu page
$("#tomatoes").mouseover(function () {
    showcase.style.background = "#fe443e";
    fruitsPop(0, 3);
    fruitsGone(14, 20);
})
$("#tomatoes").mouseout(function () {
    showcase.style.background = "#efbe01";
    fruitsGone(0, 3);
    fruitsPop(14, 20);
})
$("#oranges").mouseover(function () {
    showcase.style.background = "#ff6700";
    fruitsPop(3, 7);
    fruitsGone(14, 20);
})
$("#oranges").mouseout(function () {
    showcase.style.background = "#efbe01";
    fruitsGone(3, 7);
    fruitsPop(14, 20);
})
$("#grapes").mouseover(function () {
    showcase.style.background = "#ff6d8b";
    fruitsPop(7, 9);
    fruitsGone(14, 20);
})
$("#grapes").mouseout(function () {
    showcase.style.background = "#efbe01";
    fruitsGone(7, 9);
    fruitsPop(14, 20);
})
$("#avocados").mouseover(function () {
    showcase.style.background = "#6dd5bc";
    fruitsPop(9, 12);
    fruitsGone(14, 20);
})
$("#avocados").mouseout(function () {
    showcase.style.background = "#efbe01";
    fruitsGone(9, 12);
    fruitsPop(14, 20);
})
$("#flowers").mouseover(function () {
    showcase.style.background = "#ffd000";
    fruitsPop(12, 14);
    fruitsGone(14, 20);
})
$("#flowers").mouseout(function () {
    showcase.style.background = "#efbe01";
    fruitsGone(12, 14);
    fruitsPop(14, 20);
})
$("#about").mouseover(function () {
    showcase.style.background = "#e8590d";
    fruitsPop(20, 21);
    fruitsGone(14, 20);
})
$("#about").mouseout(function () {
    showcase.style.background = "#efbe01";
    fruitsGone(20, 21);
    fruitsPop(14, 20);
})
$("#rd").mouseover(function () {
    showcase.style.background = "#dc3f69";
    fruitsPop(21, 24);
    fruitsGone(14, 20);
})
$("#rd").mouseout(function () {
    showcase.style.background = "#efbe01";
    fruitsGone(21, 24);
    fruitsPop(14, 20);
})
$("#csr").mouseover(function () {
    showcase.style.background = "#fa7666";
    fruitsPop(24, 25);
    fruitsGone(14, 20);
})
$("#csr").mouseout(function () {
    showcase.style.background = "#efbe01";
    fruitsGone(24, 25);
    fruitsPop(14, 20);
})

$(".menuCircle").mouseover(function () {
    $(".menuCircle").css("background", "white");
    $(".line").css("background", "black");
})
$(".menuCircle").mouseout(function () {
    $(".menuCircle").css("background", "black");
    $(".line").css("background", "white");
})

function fruitsPop(a, b) {
    for (let j = a; j < b; j++) {
        image[j].style.transform = "translateY(0)";
    }
}

function fruitsGone(a, b) {
    for (let j = a; j < b; j++) {
        image[j].style.transform = "translateY(490px)";
    }
}
function second(){
    s++;
    if(s==30){s=0}
}
setInterval(second,1000);

// moving fruits on hover
document.body.addEventListener("mouseover",function(event){
    if (count == 1 && s!=0 && s!=1) {
        let x = event.clientX;
        let y = event.clientY;
        $(".tomato img").css("transform", "translateX(" + 0.02 * x + "px) translateY(" + 0.02 * y + "px)");
    }
    if (count == 2 && s!=6 && s!=7) {
        let x = event.clientX;
        let y = event.clientY;
        $(".citrus img").css("transform", "translateX(" + 0.02 * x + "px) translateY(" + 0.02 * y + "px)")
    }
    if (count == 3 && s!=12 && s!=13) {
        let x = event.clientX;
        let y = event.clientY;
        $(".grape img").css("transform", "translateX(" + 0.02 * x + "px) translateY(" + 0.02 * y + "px)")
    }
    if (count == 4 && s!=18 && s!=19) {
        let x = event.clientX;
        let y = event.clientY;
        $(".avocado img").css("transform", "translateX(" + 0.02 * x + "px) translateY(" + 0.02 * y + "px)")
    }
    if (count == 5 && s!=24 && s!=25) {
        let x = event.clientX;
        let y = event.clientY;
        $(".flower img").css("transform", "translateX(" + 0.02 * x + "px) translateY(" + 0.02 * y + "px)")
    }
})
