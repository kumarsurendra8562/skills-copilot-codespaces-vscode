// Create web server
const http = require('http');
const fs = require('fs');

// Create server
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Read file
    fs.readFile('./index.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end('Error');
        } else {
            res.end(data);
        }
    }
    )}).listen(3000, () => {
        console.log('Server is running on port 3000');
    });