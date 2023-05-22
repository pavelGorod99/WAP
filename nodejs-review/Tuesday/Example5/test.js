const express = require('express');
const session = require('express-session');
const app = express();

app.use(express.urlencoded({ 'extended':false }));
app.use(session({
    'secret': 'salt for cookie',
    'resave': false,
    'saveUninitialized': false
}));

app.get('/', (req, res) => {
    // throw new Error('BROKEN');
    res.send(
        `
        <a href='add'>Add to session</a><br>
        <a href='view'>View session</a>
        `
    );
});

app.get('/add', (req, res) => {
    res.send(
        `
        <form method="post">
            <input name="key">
            <input name="value">
            <input type="submit">
        </form>
        `
    );
});

app.get("/view", (req, res) => {
    let view = "<ul>";
    for (const key in req.session) {
        if (key === 'cookie') continue;
        view += `<li>${key}: ${req.session[key]}</li>`;
    }
    view += `
        </ul>
        <a href='/'>back</a>
    `;
    res.send(view);
});

app.post("/add", (req, res) => {
    req.session[req.body.key] = req.body.value;
    res.redirect(303, "/view");
});

app.listen(3000);