const { draw_Triangle } = require('./src/patternsLib.js');
const { getPatternInfo } = require('./src/patternsUtil.js');

const main = function() {
  let userArgs = process.argv;
  let patternInfo = getPatternInfo(userArgs);
  console.log(draw_Triangle(patternInfo));
}

main();
exports.main = draw_Triangle;
