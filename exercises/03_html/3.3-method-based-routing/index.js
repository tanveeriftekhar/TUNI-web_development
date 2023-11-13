const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  if (req.method === 'GET') {
    fs.readFile('get.html', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.end('Internal Server Error');
      } else {
        res.statusCode = 200;
        res.end(data);
      }
    });
  } else if (req.method === 'POST') {
    fs.readFile('post.html', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.end('Internal Server Error');
      } else {
        res.statusCode = 200;
        res.end(data);
      }
    });
  } else {
    res.statusCode = 405;
    res.setHeader('Allow', 'GET, POST');
    res.end('Method Not Allowed');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
