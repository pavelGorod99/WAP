const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        // do something
    }
    if (url === '/message' && method === 'POST') {
        // do something
    }
    // do something
});

server.listen(3000);