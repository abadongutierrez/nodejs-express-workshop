var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {
        'Context-Type': 'text/plain',
    });
    response.end('Hello World!');
}).listen(3000);

console.log('Server running at http://localhost:3000');
