var colors = ['#0072BB', '#FF4C3B', '#FFD034', '#333333'];
var index = 0;

setInterval(function() {
    document.querySelector('h1').style.color = colors[index];
    index = (index + 1) % colors.length;
}, 1000);
