module.exports.searchWord = (word) => {
    return new Promise ((resolve, reject) => {
        var mysql = require('mysql2');

        var config = {
            user: 'root',
            password: '',
            database: 'entries',
            port: 3306
        };
    
        const connection = mysql.createConnection(config);
    
        connection.connect((err) => {
            if (err) {
                console.error('Error connecting to MySQL: ', err.message);
                reject(err);
                return;
            }
    
            console.log('Connected to MySQL');
    
            console.log("WORD: " + word);
    
            const sqlQuery = "SELECT * FROM entries WHERE word = '" + word + "'";
    
            connection.query(sqlQuery, (err, results, fields) => {
                if (err) {
                    console.error('Error executing query: ', err.message);
                    reject(err);
                    return;
                }
    
                console.log('Query results: ', results);
    
                connection.end((err) => {
                    if (err) {
                        console.error('Error closing connection: ', err.message);
                        reject(err);
                        return;
                    }
                    console.log('Connection closed!');
                    resolve(results);
                });
            });
        });
    });
};