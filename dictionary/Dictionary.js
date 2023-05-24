const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./word');

const app = express();

app.use(express.static(__dirname));

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/dict.html'));
});

app.get('/search', function (req, res) {

    console.log('arrived in /search');
    const word = req.query.word;
 
    console.log(word);

    db.searchWord(word)
        .then(result => {
            console.log("RESULT: ");
            console.log(result);
            res.send(result);
        }).catch(error => {
            console.error('Error searching word: ', error);
            res.status(500).send('An error occurred while searching for the word.');
        });
});

app.listen(3000);