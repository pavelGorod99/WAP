const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', function (req, res, next) {
    fs.readFile('/file-does-not-exist', function (err, data) {
        if (err) {
            next(err);
        } else {
            res.send(data);
        }
    });
});

app.listen(3000);