var right = 0;
var maxMargin;
var jumpMargin = 150;

var slideRight = document.querySelector(".slide-right");
var slideLeft = document.querySelector(".slide-left");

function setWidth() {
    // single Image width
    var boxwidth = document.querySelector(".container").offsetWidth;
    // Row container width
    var displaywidth = document.querySelector(".row").offsetWidth;
    // Row container height
    var displayheight = document.querySelector(".row").offsetHeight;
    // Number of div with images to be displayed
    var children = document.querySelectorAll(".row-container > .container").length;
    // total width of all divs with imgs and their margin
    var outerboxwidth = children * boxwidth + (children * 10);
    // width for container with div images
    document.querySelector(".row-container").style.width = outerboxwidth + "px";
    // Buttons height same as the div container
    document.querySelectorAll("button")[0].style.height = displayheight + "px";
    document.querySelectorAll("button")[1].style.height = displayheight + "px";
    // Difference of total width and row width
    maxMargin = outerboxwidth - displaywidth;
}

function slideLeftFunc(event) {
    var rowcont = document.querySelector(".row-container");
    if (right <= -maxMargin) {
        event.preventDefault();
    } else {
        right -= jumpMargin;
    }
    rowcont.style.marginLeft = right + "px";
}

function slideRightFunc(event) {
    var rowcont = document.querySelector(".row-container");
    if (right == 0) {
        event.preventDefault();
    } else if (right >= maxMargin) {
        event.preventDefault();
    } else {
        right += jumpMargin;
    }
    rowcont.style.marginLeft = right + "px";
}

slideRight.addEventListener("click", slideRightFunc);
slideLeft.addEventListener("click", slideLeftFunc);


window.onload = setWidth;