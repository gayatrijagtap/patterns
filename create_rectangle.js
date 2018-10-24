draw_Rectangle = require('./src/patternsLib.js').draw_Rectangle;
const { getPatternInfo } = require('./src/patternsUtil.js');

const main = function() {
  let userArgs = process.argv;
  let patternInfo = getPatternInfo(userArgs);
  console.log(draw_Rectangle(patternInfo));
}

main();
exports.main = draw_Rectangle;
