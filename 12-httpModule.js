const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to home page");
  }
  if (req.url === "/about") {
    res.end("This is about history page");
  }
  res.end(`
  <h1>Oops!</h1>
  <p>We can not find the page </p>
  <a href="/">back to home page</a>
  `)
})

server.listen(5000);