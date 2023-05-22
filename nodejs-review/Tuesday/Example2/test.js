const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

app.use((req, res, next) => {
    // console.log('This is always run');
    // next();
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.use('/add-product', (req, res, next) => {
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

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express</h1>');
});

app.listen(3000, () => {
    console.log('Your server is running on 3000');
});