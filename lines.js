const through = require('through2');
const split = require('split');

let counter = 0;

function write(buffer, _, next) {
  const line = buffer.toString();
  this.push(counter % 2 ? line.toUpperCase() + '\n' : line.toLowerCase() + '\n');
  counter++;
  next();
}

function end(done) {
  done();
}

process.stdin
  .pipe(split())
  .pipe(through(write, end))
  .pipe(process.stdout);
