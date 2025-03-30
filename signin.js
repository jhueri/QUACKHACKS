document.getElementById("loginBtn").addEventListener("click", function() {
    document.body.innerHTML = "<h2 class='loading-text'>Logging in...</h2>";
    
    setTimeout(() => {
        localStorage.setItem("user", "stevens_student");
        window.location.replace("index.html");
        window.location.href = "welcome.html";
    }, 2000);
});