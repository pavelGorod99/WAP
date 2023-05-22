const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send(
        `
        <html>
            <body>
                <h1>Hello world</h1>
            </body>
        </html>
        `
    );
});

app.post('/submit-data', function(req, res) {
    res.send('POST request');
});

app.post('/update-data', function(req, res) {
    res.send('PUT Request');
});

app.delete('/delete-data', function(req, res) {
    res.send('DELETE Request');
});

var server = app.listen(5000, function() {
    console.log('Node server is running...');
});
