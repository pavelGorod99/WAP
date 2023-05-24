const express = require('express');
const parseUrl = require('parseurl');
const session = require('express-session');
const app = express();

app.use(session({
    secret: 'a special secret'
}));

app.listen(3000);

app.use(function (req, res, next) {
    if (!req.session.views) {
        req.session.views = {}; // PUT VIEWS OBJECT INTO SESSION
    }

    // GET THE URL PATHNAME
    var pathname = parseUrl(req).pathname;

    console.log("pathname : " + pathname);

    req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;

    console.log("count of views: " + req.session.views[pathname]);

    next();
});

app.get('/foo', function (req, res, next) {
    res.send('you viewd this page ' + req.session.views['/foo'] + ' times');
});

app.get('/bar', function (req, res, next) {
    res.send('you viewd this page ' + req.session.views['/bar'] + ' times');
});

app.get('/', (req, res) => {
    res.send(
        `
        <a href='foo'>foo</a>
        <a href='bar'>bar</a>
        `
    );
});