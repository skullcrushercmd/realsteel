var totalScroll = 0;

window.addEventListener('wheel', function(e) {
    
    totalScroll += Math.abs(e.deltaY);

    
    if (totalScroll > 1200) {
        
        window.location.href = 'es.html';
    }
});
