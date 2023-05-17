const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.use('/calculation', (req, res, next) => {
    console.log(req.body);
    if (req.body != undefined) {
        var obj = req.body;
        obj.firstn = parseInt(obj.firstn);
        obj.lastn = parseInt(obj.lastn);
        var result;
        switch (obj.operation) {
            case 'addition':
                result = obj.firstn + obj.lastn;
                break;
            case 'subtraction':
                result = obj.firstn - obj.lastn;
                break;
            case 'multiplication':
                result = obj.firstn * obj.lastn;
                break;
            case 'division':
                result = obj.firstn / obj.lastn;
                break;    
            default:
                break;
        }
        res.send('<h1>The Answer is: ' + result + '</h1>' +
                 '<br>' +
                 '<a href="/">Another calculation</a>');
    }
});

app.use('/', (req, res, next) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <style>
    input[type=number], select {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    input[type=submit] {
        width: 100%;
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    input[type=submit]:hover {
        background-color: #45a049;
    }

    div {
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 20px;
    }
    </style>
    <body>

    <h3>Using CSS to style an HTML Form</h3>

    <div>
    <form action="/calculation" method="post">
        <label for="fname">First number</label>
        <input type="number" id="fname" name="firstn" placeholder="first number">

        <label for="lname">Second number</label>
        <input type="number" id="lname" name="lastn" placeholder="second number">

        <label for="operation">Operation</label>
        <select id="operation" name="operation">
            <option value="addition">addition</option>
            <option value="subtraction">subtraction</option>
            <option value="multiplication">multiplication</option>
            <option value="division">division</option>
        </select>
    
        <input type="submit" value="Submit">
    </form>
    </div>

    </body>
    </html>
    `);
});

app.listen(3000);
    