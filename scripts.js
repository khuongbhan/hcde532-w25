
var $burger = $("#burger-icon");
// var $nav = $("#nav-container");
var $nav = document.getElementById("#nav-container")
var $navA = $('nav[data-nav] a');
var isVisible = false;

// function mouseClick(){

//     console.log("click");
//     if(isVisible === false){
//         $nav.show();
//         isVisible = true;
//     }
//     else{
//         $nav.hide();
//         isVisible = false;
//     }
// }

function myFunction(y,x) {
    y.classList.toggle("change");

    console.log("concu");
    if(isVisible === false){
        // $nav.show();
        x.style.display= "block"
        isVisible = true;
    }
    else{
        // $nav.hide();
        x.style.display= "none"
        isVisible = false;
    }
}

window.onload = function() {
    var $burger = document.getElementById("burger-icon");
var $nav = document.getElementById("nav-container")
// var $navA = $('nav[data-nav] a');
    // $navA.onclick = myFunction;
    $burger.onclick = function() {myFunction($burger,$nav)};
//     $nav.on( "click", myFunction);
// $navA.on( "click", myFunction);
// $burger.on( "click", myFunction);
}



// $burger.on( "click", mouseClick);
// // close the mobile menu when menu link is clicked
// $navA.on( "click", mouseClick);


