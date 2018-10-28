const assert = require('assert');
const draw_Triangle = require('../src/patternsLib.js').draw_Triangle;

assert.equal(draw_Triangle({type:'left',height:2}),"* \n**");
assert.equal(draw_Triangle({type:'left',height:1}),"*");
assert.equal(draw_Triangle({type:'left',height:3}),"*  \n** \n***");
assert.equal(draw_Triangle({type:'left',height:5}),"*    \n**   \n***  \n**** \n*****");
assert.equal(draw_Triangle({type:'right',height:1}),"*");
assert.equal(draw_Triangle({type:'right',height:2})," *\n**");
assert.equal(draw_Triangle({type:'right',height:3}),"  *\n **\n***");
assert.equal(draw_Triangle({type:'right',height:5}),"    *\n   **\n  ***\n ****\n*****");
