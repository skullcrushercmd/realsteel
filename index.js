window.addEventListener('wheel', function(e) {
    // Check if the user is trying to scroll down
    if (e.deltaY > 0) {
        // Redirect to a different page
        window.location.href = 'es.html';
    }
});
