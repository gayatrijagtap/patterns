const assert = require('assert');
const draw_Triangle = require('../src/patternsLib.js').draw_Triangle;

assert.equal(draw_Triangle('left',2),"*\n**\n");
assert.equal(draw_Triangle('left',1),"*\n");
assert.equal(draw_Triangle('left',3),"*\n**\n***\n");
assert.equal(draw_Triangle('left',5),"*\n**\n***\n****\n*****\n");
assert.equal(draw_Triangle('right',1),"*\n");
assert.equal(draw_Triangle('right',2)," *\n**\n");
assert.equal(draw_Triangle('right',3),"  *\n **\n***\n");
assert.equal(draw_Triangle('right',5),"    *\n   **\n  ***\n ****\n*****\n");
