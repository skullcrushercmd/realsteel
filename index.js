var totalScroll = 0;

window.addEventListener('wheel', function(e) {
    // Add the scroll amount to the total
    totalScroll += Math.abs(e.deltaY);

    // Check if the total scroll amount exceeds the threshold
    if (totalScroll > 1200) {
        // Redirect to a different page
        window.location.href = 'es.html';
    }
});
