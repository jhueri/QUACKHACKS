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