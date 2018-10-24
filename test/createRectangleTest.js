const assert = require('assert');
const {draw_Rectangle} = require('../src/patternsLib.js');

const stars = function(height,width) {
  const line = new Array(width).fill('*').join(''); 
  return new Array(height).fill(line).join('\n')+"\n";
}

assert.equal(draw_Rectangle({type:'filled',height:2,width:2}),stars(2,2));
assert.equal(draw_Rectangle({type:'filled',height:5,width:5}),stars(5,5));
assert.equal(draw_Rectangle({type:'filled',height:1,width:1}),stars(1,1));
assert.equal(draw_Rectangle({type:'empty',height:2,width:2}),"**\n**");
assert.equal(draw_Rectangle({type:'empty',height:1,width:1}),"*\n");
assert.equal(draw_Rectangle({type:'alternating',height:2,width:2}),"**\n--\n");
assert.equal(draw_Rectangle({type:'alternating',height:1,width:1}),"*\n");
