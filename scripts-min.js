var $burger=$("#burger-icon"),$nav=document.getElementById("nav-container"),$navA=$("nav[data-nav] a"),isVisible=!1;function myFunction(n,e){n.classList.toggle("change"),console.log("slay"),!1===isVisible?(e.style.display="block",isVisible=!0):(e.style.display="none",isVisible=!1)}window.onload=function(){var n=document.getElementById("burger-icon"),e=document.getElementById("nav-container");n.onclick=function(){myFunction(n,e)}};