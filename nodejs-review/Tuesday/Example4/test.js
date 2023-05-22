const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

app.get('/add-product', (req, res, next) => {
    console.log('In the middleware!');
    res.send(
        `
        <form action="/product" method="post">
            <input name="title">
            <button type="submit">Submit</button>
        </form>
        `
    );
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    console.log("Main route");
    res.send('<h1>Hello from Express</h1>');
});

app.listen(3000);