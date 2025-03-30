document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userName = document.getElementById('userName').value;
    const userComment = document.getElementById('userComment').value;

    console.log('Name:', userName);
    console.log('Comment:', userComment);

    document.getElementById('userName').value = '';
    document.getElementById('userComment').value = '';

    alert('Review submitted!'); 
});

const stars = document.querySelectorAll('.star');
const starRatingInput = document.getElementById('starRating');

stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = parseInt(star.dataset.value);
        starRatingInput.value = rating;

        stars.forEach(s => {
            const starValue = parseInt(s.dataset.value);
            s.querySelector('.filled-star').style.display = starValue <= rating ? 'inline' : 'none';
            s.querySelector('.empty-star').style.display = starValue > rating ? 'inline' : 'none';
        });
    });
});