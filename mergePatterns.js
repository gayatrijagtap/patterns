const { readUserArgs } = require('./src/patternsUtil.js');
const { drawFirstPattern } = require('./src/patternsUtil.js');
const { drawSecondPattern } = require('./src/patternsUtil.js');
const { mergePatterns } = require('./src/patternsUtil.js');
const { printPattern } = require('./src/patternsUtil.js');

const main = function() {
  let userArgs = process.argv;
  let patternsInfo = readUserArgs( userArgs );
  let firstPattern = drawFirstPattern(patternsInfo);
  let secondPattern = drawSecondPattern(patternsInfo);
  let mergedPattern = mergePatterns(firstPattern,secondPattern);
  console.log(printPattern(mergedPattern));
  return;
}

main();
