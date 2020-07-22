const crypto = require('crypto');
const path = require('path');
const { existsSync } = require('fs');

module.exports = function (source) {
  const stringCombination = [];
  let match;
  let regex = /src={?"\/?(.*)\/*"}?/g;
  let i = 0; // index

  const replaceFunction = (fileName) => {
    const hash = crypto.createHash('sha1');
    hash.setEncoding('hex');
    hash.write(fileName);
    hash.end();

    const rawPath = path.join(__dirname, '/public/', fileName);
    if (existsSync(rawPath)) {
      const pathResolved = `/public/${fileName}?v=${hash
        .read()
        .substring(0, 8)}`;

      return `src={"${pathResolved}"}`;
    }
  };

  while ((match = regex.exec(source)) !== null) {
    console.log(match);
    // Push before part to the array
    stringCombination.push(source.slice(i, match.index));

    // Push the changed part to the array
    stringCombination.push(replaceFunction(match[1]));

    i = regex.lastIndex;
  }

  // Push the after part to the array
  stringCombination.push(source.slice(i));

  return stringCombination.join('');
};
