const { log } = require('console');
const http = require('http');

http.createServer(function(req, res) {
    let body = []

    req.on('data', (chunk) => {
        body.push(chunk)
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        //at this point body has the entire request body stored in it as a string
        console.log(body);

        //reversing the body
        const reverseBody = body.split('').reverse().join('');
        console.log(reverseBody);

        res.writeHead(200, {'content-type': 'text/plain'});
        console.log(JSON.stringify(req.headers));

        res.write(reverseBody);
        res.end();
    })
}).listen(3000);
console.log("Listening to port 3000");