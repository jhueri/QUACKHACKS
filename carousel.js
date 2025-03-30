document.addEventListener('DOMContentLoaded', function() {
    // Get carousel elements
    const carouselSlide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.product-image');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');
    
    // Set up initial state
    let counter = 0;
    const size = images[0].clientWidth;
    
    // Initially position the carousel
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
    // Next button click
    nextBtn.addEventListener('click', function() {
        if (counter >= images.length - 1) return;
        carouselSlide.style.transition = "transform 0.5s ease";
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        updateDots();
    });
    
    // Previous button click
    prevBtn.addEventListener('click', function() {
        if (counter <= 0) return;
        carouselSlide.style.transition = "transform 0.5s ease";
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        updateDots();
    });
    
    // Dot click events
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            counter = index;
            carouselSlide.style.transition = "transform 0.5s ease";
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
            updateDots();
        });
    });
    
    // Update active dot
    function updateDots() {
        dots.forEach((dot, index) => {
            if (index === counter) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    // Auto slide every 5 seconds
    setInterval(function() {
        if (counter >= images.length - 1) {
            counter = -1;
        }
        counter++;
        carouselSlide.style.transition = "transform 0.5s ease";
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        updateDots();
    }, 5000);
    
    // Handle window resize
    window.addEventListener('resize', function() {
        const newSize = images[0].clientWidth;
        carouselSlide.style.transition = "none";
        carouselSlide.style.transform = 'translateX(' + (-newSize * counter) + 'px)';
    });
});