/* Navation menu when device is switched to mobile or tablet */
var menuButton = document.querySelector('.main-header-menu-button');
var menu = document.querySelector('.main-header-menu');

var ismenuOpen = false;

menuButton.addEventListener("click", function() {
    if (!ismenuOpen) {
        menu.style.display = "block";
        menuButton.style.backgroundPostition= "center left 50px, center";
        ismenuOpen = true;
    } else {
        menu.style.display="none";
        menuButton.style.backgroundPostition= "center,center left 50px";
        ismenuOpen = false;
    }
},false);
/* End of navation */






