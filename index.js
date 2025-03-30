const scrollbutton = document.querySelector(".options");
const leftButton = document.querySelector(".left-btn");
const rightButton = document.querySelector(".right-btn");
const scrollSpeed = 300;

function scrollLeftnow() {
    scrollbutton.scrollBy ({left: -scrollSpeed, behavior: "smooth"});
    console.log("left button clicked");
}

function scrollRightnow() {
    scrollbutton.scrollBy({ left: scrollSpeed, behavior: "smooth"});
    console.log("Right button clicked");

}

leftButton.addEventListener("click", scrollLeftnow);
rightButton.addEventListener("click", scrollRightnow);