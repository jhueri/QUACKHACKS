const scrollbutton = document.querySelector(".options");
const leftButton = document.querySelector(".left-btn");
const rightButton = document.querySelector(".right-btn");


function scrollLeftnow() {
    scrollbutton.scrollBy ({left: -150, behavior: "smooth"});
    console.log("left button clicked");
}

function scrollRightnow() {
    scrollbutton.scrollBy({ left: 150, behavior: "smooth"});
    console.log("Right button clicked");

}