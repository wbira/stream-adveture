const through = require('through2');
const http = require('http');
const PORT = process.argv[2];

function uppercase(buffer, _, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}

const server = http.createServer((request, response) => {
  request.pipe(through(uppercase, end)).pipe(response);
});
server.listen(PORT);
