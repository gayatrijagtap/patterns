const assert = require('assert');
const {draw_Rectangle} = require('../src/patternsLib.js');

const stars = function(height,width) {
  const line = new Array(width).fill('*').join(''); 
  return new Array(height).fill(line).join('\n')+"\n";
}

assert.equal(draw_Rectangle('filled',2,2),stars(2,2));
assert.equal(draw_Rectangle('filled',5,5),stars(5,5));
assert.equal(draw_Rectangle('filled',1,1),stars(1,1));
assert.equal(draw_Rectangle('empty',2,2),"**\n**");
assert.equal(draw_Rectangle('empty',1,1),"*\n");
assert.equal(draw_Rectangle('alternating',2,2),"**\n--\n");
assert.equal(draw_Rectangle('alternating',1,1),"*\n");
