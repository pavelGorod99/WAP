var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
    var mysql = require('mysql2');

    // CONFIG OF DATABASE
    var config = {
        user: 'root',
        password: '',
        database: 'School',
        port: 3306
    }

    const connection = mysql.createConnection(config);

    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to MySQL:', err.message);
            return;
        }
        console.log('Connected to MySQL');
        
        // PERFORM SELECT QUERY
        connection.query('SELECT * FROM Person', (err, results, fields) => {
            if (err) {
                console.error('Error executing query: ', err.message);
                return;
            }
            console.log('Query results: ', results);
            // console.log('Field metdata: ', fields);
            // result = results;
            res.render('index', { results });

            connection.end((err) => {
                if (err) {
                    console.error('Error closing connection: ', err.message);
                    return;
                }
                console.log('Connection closed!');
            });
        });
    });

    // sql.connect(config, function (err) {
    //     if (err) console.log(err);
    //     var request = new sql.Request();
    //     request.query('SELECT * FROM Person', function (err, recordset) {
    //         if (err) console.log(err);
    //         res.send(recordset);
    //     });
    // });
});

app.listen(5000);