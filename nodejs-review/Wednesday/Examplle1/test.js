const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/api', function(req, res) {
    res.locals = { title: 'COOL PAGE' };
    res.render('index');
});

app.get('/render-title', function(req, res) {
    res.render('index', { title: 'COOL PAGE' });
});

app.listen(3000);