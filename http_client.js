const request = require('request');
const url = 'http://localhost:8099';

process.stdin.pipe(request.post(url)).pipe(process.stdout);
