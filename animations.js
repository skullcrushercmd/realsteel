var githubAnimation = lottie.loadAnimation({
    container: document.getElementById('github'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/content/github.json'
});
var youtubeAnimation = lottie.loadAnimation({
    container: document.getElementById('youtube'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: '/content/youtube.json'
});
document.getElementById('github').addEventListener('mouseover', function() {
    githubAnimation.play();
});
document.getElementById('github').addEventListener('mouseout', function() {
    githubAnimation.stop();
});
document.getElementById('youtube').addEventListener('mouseover', function() {
    youtubeAnimation.play();
});
document.getElementById('youtube').addEventListener('mouseout', function() {
    youtubeAnimation.stop();
});



