const { draw_Diamond } = require('./src/patternsLib.js');
const { getPatternInfo } = require('./src/patternsUtil.js');

const main = function() {
  let userArgs = process.argv;
  let patternInfo = getPatternInfo(userArgs);
  console.log(draw_Diamond(patternInfo));
}

main();
exports.main = draw_Diamond;
