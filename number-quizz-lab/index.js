const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');

const quiz = require('./quiz.js');

const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(cookieParser());

app.use(session({
    secret: "secret123",
    saveUninitialized: true,
    resave: false
}));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', function (req, res) {
    return res.render("index_view");
});

app.use('/quiz', quiz);
app.listen(5000);