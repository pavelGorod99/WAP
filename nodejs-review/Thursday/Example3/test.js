const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser('sale for cookie signing'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    if (req.signedCookies.remember) {
        res.send('Remember :) Click to <a href=\'/forget\'>forget</a>');
    } else {
        res.send(
            `
            <form method="post">
                <label>
                    <input type="checkbox" name="remember">
                    Remember me
                </label>
                <input type="submit">
            </form>
            `
        );
    }
});

app.post('/', (req, res) => {
    if (req.body.remember) {
        res.cookie('remember', 1, { maxAge: 1000 * 60 * 60 * 24 * 7, signed: true });
    }
    res.redirect('back');
});

app.get('/forget', (req, res) => {
    res.clearCookie('remember');
    res.redirect('back');
});

app.listen(3000);