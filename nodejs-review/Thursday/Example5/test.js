const express = require('express');
const cookieParser = require('cookie-parser');
const sessions = require('express-session');

const app = express();

const oneDay = 1000 * 60 * 60 * 24;

app.use(sessions({
    secret: "thisismysecret",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false
}));

// PARSING THE INCOMING DATA
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// SERVING PUBLIC FILE
app.use(express.static(__dirname));

// COOKIE PARSER MIDDLEWARE
app.use(cookieParser());

// USERNAME AND PASSWORD
const myusername = 'user1';
const mypassword = 'mypassword';

// A VARIABLE TO SAVE A SESSION
var session;

app.get('/', (req, res) => {
    session = req.session;
    if (session.userid) {
        res.send(
            `
            Welcome User <a href=\'/logout\'>click to logout</a>
            `
        );
        res.sendFile('./login.html', { root: __dirname });
    }
});

app.post('/user', (req, res) => {
    if (req.body.username == myusername && req.body.password == mypassword) {
        session = req.session;
        session.userid = req.body.username;
        console.log(req.session);
        res.send(
            `Hey there, welcome <a href=\'/logout\'>click to logout</a>`
        );
    } else {
        res.send('Invalid username or password');
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

app.listen(4000);