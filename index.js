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

if (localStorage.getItem("user")) {
    document.body.innerHTML = "<h1>Welcome, Stevens Student!</h1> <button onclick='logout()'>Continue</button>";
}

function logout() {
    localStorage.removeItem("user");
    window.location.reload();
}