let menuButton = document.querySelector('.main-header-menu-button');
let menu = document.querySelector('.main-header-menu');

let ismenuOpen = false;

menuButton.onclick= function() {
    if (!ismenuOpen) {
        menu.style.display = "block";
        menuButton.style.backgroundPostition= "center left 50px,center";
        ismenuOpen = true;
    } else {
        menu.style.display="none";
        menuButton.style.backgroundPostition= "center,center left 50px";
        ismenuOpen = false;
    }
}