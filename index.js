var totalScroll = 0;

window.addEventListener('wheel', function(e) {
    console.log('Wheel event fired', e.deltaY);
    totalScroll += Math.abs(e.deltaY);
    console.log('Total scroll', totalScroll);

    if (totalScroll > 1400) {
        console.log('Redirecting to es.html');
        window.location.href = 'es.html';
    }
});
