const concat = require('concat-stream');

const reverseStream = content => {
  const reversedText = content
    .toString()
    .split('')
    .reverse()
    .join('');
  console.log(reversedText);
};
process.stdin.pipe(concat(reverseStream));
