draw_Rectangle = require('./src/patternsLib.js').draw_Rectangle;

const main = function() {
  let type = process.argv[2];
  let height = +process.argv[3];
  let width = +process.argv[4];
  console.log(draw_Rectangle(type,height,width));
}

main();
exports.main = draw_Rectangle;
