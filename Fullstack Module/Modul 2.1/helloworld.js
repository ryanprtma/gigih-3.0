const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-Type': 'text/plain' });
    res.end('Hello, World');
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});