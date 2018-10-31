const assert = require('assert');
const draw_Diamond = require('../src/patternsLib.js').draw_Diamond;

assert.deepEqual(draw_Diamond({type:'filled_diamond',height:2}),["*"]);
assert.deepEqual(draw_Diamond({type:'filled_diamond',height:1}),["*"]);
assert.deepEqual(draw_Diamond({type:'filled_diamond',height:3}),[" * ","***"," * "]);
assert.deepEqual(draw_Diamond({type:'filled_diamond',height:5}),["  *  "," *** ","*****"," *** ","  *  "]);
assert.deepEqual(draw_Diamond({type:'hollow_diamond',height:2}),["*"]);
assert.deepEqual(draw_Diamond({type:'hollow_diamond',height:1}),["*"]);
assert.deepEqual(draw_Diamond({type:'hollow_diamond',height:3}),[' * ','* *',' * ']);
assert.deepEqual(draw_Diamond({type:'angled_diamond',height:3}),[" * ","* *"," * "]);
assert.deepEqual(draw_Diamond({type:'angled_diamond',height:5}),['  *  ',' / \\ ','*   *',' \\ / ','  *  ']);
assert.deepEqual(draw_Diamond({type:'angled_diamond',height:1}),["*"]);
assert.deepEqual(draw_Diamond({type:'angled_diamond',height:2}),["*"]);
