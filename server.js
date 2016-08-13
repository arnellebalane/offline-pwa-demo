const express = require('express');
const app = express();


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.use('/static', express.static(__dirname + '/static'));
app.use('/service-worker.js', express.static(__dirname + '/static/service-worker.js'));

app.listen(3000, () => console.log('Server now running at port 3000'));
