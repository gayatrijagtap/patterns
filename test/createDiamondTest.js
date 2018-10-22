const assert = require('assert');
const draw_Diamond = require('../src/patternsLib.js').draw_Diamond;

assert.equal(draw_Diamond('filled',2),"*");
assert.equal(draw_Diamond('filled',1),"*");
assert.equal(draw_Diamond('filled',3)," *\n***\n *\n");
assert.equal(draw_Diamond('filled',5),"  *\n ***\n*****\n ***\n  *\n");
assert.equal(draw_Diamond('hollow',2),"*");
assert.equal(draw_Diamond('hollow',1),"*");
assert.equal(draw_Diamond('hollow',3),'  *\n * *\n  *');
assert.equal(draw_Diamond('angled',3),'  *\n * *\n  *');
assert.equal(draw_Diamond('angled',5),'   *\n  / \\\n *   *\n  \\ /\n   *');
assert.equal(draw_Diamond('angled',1),"*");
assert.equal(draw_Diamond('angled',2),"*");
