var colors = ['#0072BB', '#FF4C3B', '#FFD034', '#333333'];
var index = 0;

setInterval(function() {
    document.querySelector('h1').style.color = colors[index];
    index = (index + 1) % colors.length;
}, 1000);



if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(function(registration) {
            console.log('Service worker registered!');
        })
        .catch(function(error) {
            console.error('Service worker registration failed.');
        });
}
