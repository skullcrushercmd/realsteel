var githubAnimation = lottie.loadAnimation({
    container: document.getElementById('github'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: '/content/github.json'
});
var youtubeAnimation = lottie.loadAnimation({
    container: document.getElementById('youtube'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: '/content/youtube.json'
});
var infoAnimation = lottie.loadAnimation({
    container: document.getElementById('info'), 
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'content/info.json' 
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
document.getElementById('info').addEventListener('mouseover', function() {
    infoAnimation.play();
});
document.getElementById('info').addEventListener('mouseout', function() {
    infoAnimation.stop();
});

