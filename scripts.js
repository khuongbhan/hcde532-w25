var $burger = $("#burger-icon");
// var $nav = $("#nav-container");
var $nav = document.getElementById("nav-container")
var $navA = $('nav[data-nav] a');
var isVisible = false;

function myFunction(y, x) {
    y.classList.toggle("change");

    console.log("concu");
    if (isVisible === false) {
        // $nav.show();
        x.style.display = "block"
        isVisible = true;
    } else {
        // $nav.hide();
        x.style.display = "none"
        isVisible = false;
    }
}

window.onload = function () {
    var $burger = document.getElementById("burger-icon");
    var $nav = document.getElementById("nav-container")
    $burger.onclick = function () {
        myFunction($burger, $nav)
    };
}