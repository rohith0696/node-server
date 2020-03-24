const http = require('http');

const hostname = '127.0.0.1';
const port = 3003;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hi all!..\n Welcome to Rohith server page\n');
  res.end('Stay Home and Stay Safe');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
