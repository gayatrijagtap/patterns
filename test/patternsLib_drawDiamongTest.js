const assert = require('assert');
const draw_Diamond = require('../src/patternsLib.js').draw_Diamond;

assert.equal(draw_Diamond({type:'filled',height:2}),"*");
assert.equal(draw_Diamond({type:'filled',height:1}),"*");
assert.equal(draw_Diamond({type:'filled',height:3})," *\n***\n *");
assert.equal(draw_Diamond({type:'filled',height:5}),"  *\n ***\n*****\n ***\n  *");
assert.equal(draw_Diamond({type:'hollow',height:2}),"*");
assert.equal(draw_Diamond({type:'hollow',height:1}),"*");
assert.equal(draw_Diamond({type:'hollow',height:3}),' *\n* *\n *');
assert.equal(draw_Diamond({type:'angled',height:3}),' *\n* *\n *');
assert.equal(draw_Diamond({type:'angled',height:5}),'  *\n / \\\n*   *\n \\ /\n  *');
assert.equal(draw_Diamond({type:'angled',height:1}),"*");
assert.equal(draw_Diamond({type:'angled',height:2}),"*");
