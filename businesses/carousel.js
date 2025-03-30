document.addEventListener('DOMContentLoaded', function() {
    const carouselSlide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.product-image');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');

    let counter = 0;
    let intervalId;

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

    function nextSlide() {
        if (counter >= images.length - 1) {
            counter = 0; 
            carouselSlide.style.transition = "none"; 
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
            updateDots();
            setTimeout(() => { 
                carouselSlide.style.transition = "transform 0.5s ease";
            }, 10);
        } else {
            carouselSlide.style.transition = "transform 0.5s ease";
            counter++;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
            updateDots();
        }
    }

    nextBtn.addEventListener('click', nextSlide);

    prevBtn.addEventListener('click', function() {
        if (counter <= 0) return;
        carouselSlide.style.transition = "transform 0.5s ease";
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        updateDots();
    });

    function startAutoSlide() {
        intervalId = setInterval(nextSlide, 3000); 
    }

    function stopAutoSlide() {
        clearInterval(intervalId);
    }

    startAutoSlide(); 

    window.addEventListener('resize', function() {
        const newSize = container.clientWidth;
        carouselSlide.style.transition = "none";
        carouselSlide.style.transform = 'translateX(' + (-newSize * counter) + 'px)';
        stopAutoSlide(); 
        startAutoSlide(); 
    });

    updateDots();
});