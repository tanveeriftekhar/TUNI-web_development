const http = require('http');
const fs = require('fs');
const path = require('path');

module.exports = http.createServer(function(req, res) {
    // Parse the URL path
  const urlPath = req.url;

  if (urlPath === '/homer') {
    readFileSendResponse('homer.html', 'text/html', res);
  } else if (urlPath === '/bradbury') {
    readFileSendResponse('bradbury.html', 'text/html', res);
  } else if (urlPath === '/') {
    readFileSendResponse('index.html', 'text/html', res);
  } else {
    // Handle 404 Not Found for other paths
    res.statusCode = 404;
    res.statusMessage = 'Requested content not found';
    res.end();
  }
}).listen(3000);

console.log("server running on port 3000");

const readFileSendResponse = (fileName, contentType, response) => {
    fs.readFile(path.resolve(fileName), function (error, file) {
      if (error) {
        response.writeHead(404);
        response.write('An error occured: ', error);
      } else {
        response.writeHead(200, { 'Content-Type': contentType });
        response.write(file);
      }
      response.end();
    })
  }
