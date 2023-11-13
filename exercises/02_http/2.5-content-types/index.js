const http = require('http');
const fs = require('fs');
const path = require('path');
const { log } = require('console');

http.createServer(function (request, response) {

  //TODO: implement sending responds to requests for XML, TXT, JSON, and */* handling JSON provided as an example.
  const acceptHeader = request.headers['accept'];

  if (acceptHeader.includes('application/json')) {
    readFileSendResponse('data.json', 'application/json', response);
  } else if (acceptHeader.includes('text/plain')) {
    readFileSendResponse('data.txt', 'text/plain', response);
  } else if (acceptHeader.includes('application/xml')) {
    readFileSendResponse('data.xml', 'application/xml', response);
  } else if (acceptHeader.includes('*/*')) {
    // If no specific content type is requested, send JSON as an example
    readFileSendResponse('data.json', 'application/json', response);
  } else {
    response.statusCode = 406;
    response.statusMessage = 'Content type not available';
    response.end();
  }
}).listen(3000);

/* 
  * @param {string} fileName - name of the file to be read
  * @param {string} contentType - type of the content to be sent in the response
  * @param {object} response - response object
  */
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
console.log("server running on port 3000");