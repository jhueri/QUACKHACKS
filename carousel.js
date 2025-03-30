document.addEventListener('DOMContentLoaded', function() {
    const carouselSlide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.product-image');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');
    
    let counter = 0;
    
    const container = document.querySelector('.carousel-container');
    const size = container.clientWidth;
    
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
    nextBtn.addEventListener('click', function() {
        if (counter >= images.length - 1) return;
        carouselSlide.style.transition = "transform 0.5s ease";
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        updateDots();
    });
    
    window.addEventListener('resize', function() {
        const newSize = container.clientWidth;
        carouselSlide.style.transition = "none";
        carouselSlide.style.transform = 'translateX(' + (-newSize * counter) + 'px)';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const carouselSlide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.product-image');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');
    
    let counter = 0;
    
    const container = document.querySelector('.carousel-container');
    const size = container.clientWidth; 
    
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
    function updateDots() {
        dots.forEach((dot, index) => {
            if (index === counter) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    nextBtn.addEventListener('click', function() {
        if (counter >= images.length - 1) return;
        carouselSlide.style.transition = "transform 0.5s ease";
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        updateDots();
    });
    
    prevBtn.addEventListener('click', function() {
        if (counter <= 0) return;
        carouselSlide.style.transition = "transform 0.5s ease";
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        updateDots();
    });

    window.addEventListener('resize', function() {
        const newSize = container.clientWidth;
        carouselSlide.style.transition = "none";
        carouselSlide.style.transform = 'translateX(' + (-newSize * counter) + 'px)';
    });
    
    updateDots();
});