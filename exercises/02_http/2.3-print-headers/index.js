const { log } = require('console');
const http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const headerJSON = JSON.stringify(req.headers, null, 2);
    res.write(JSON.stringify(req.headers));
    res.end();
    console.log("response done!");
    
}).listen(3000);

console.log("Server is running on port 3000");