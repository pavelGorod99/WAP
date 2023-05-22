var fs = require('fs');

// IF FILE DOES NOT EXIST, IT WILL BE CREATED, APPEMND TO FILE
fs.appendFile('test.txt', 'Hello world!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

// WRITE TO FILE
fs.writeFile('test1.txt', 'Hello to second file!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

// DELETE A FILE
fs.unlink('test1.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
});

// READ A FILE SYNC
try {
    const data = fs.readFileSync('test.txt', 'utf8');
    console.log(data);
} catch (err) {
    console.error(err);
}