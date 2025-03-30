document.getElementById("loginBtn").addEventListener("click", function() {
    document.body.innerHTML = "<h2 class='loading-text'>Logging in...</h2>";
    
    setTimeout(() => {
        localStorage.setItem("user", "stevens_student"); 
        window.location.href = "index.html";
    }, 2000);
});
