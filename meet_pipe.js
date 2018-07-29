const fs = require('fs');
const fileUrl = process.argv[2];

fs.createReadStream(fileUrl).pipe(process.stdout);
