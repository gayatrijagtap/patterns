const assert = require('assert');
const {draw_Rectangle} = require('../src/patternsLib.js');

assert.deepEqual(draw_Rectangle({type:'filled_rectangle',height:2,width:2}),['**','**']);
assert.deepEqual(draw_Rectangle({type:'filled_rectangle',height:5,width:5}),['*****','*****','*****','*****','*****']);
assert.deepEqual(draw_Rectangle({type:'filled_rectangle',height:1,width:1}),['*']);
assert.deepEqual(draw_Rectangle({type:'empty_rectangle',height:2,width:2}),['**','**']);
assert.deepEqual(draw_Rectangle({type:'empty_rectangle',height:1,width:1}),["*"]);
assert.deepEqual(draw_Rectangle({type:'alternating_rectangle',height:2,width:2}),["**","--"]);
assert.deepEqual(draw_Rectangle({type:'alternating_rectangle',height:1,width:1}),["*"]);
