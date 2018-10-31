const assert = require('assert');
const draw_Triangle = require('../src/patternsLib.js').draw_Triangle;

assert.deepEqual(draw_Triangle({type:'left_triangle',height:2}),["* ","**"]);
assert.deepEqual(draw_Triangle({type:'left_triangle',height:1}),["*"]);
assert.deepEqual(draw_Triangle({type:'left_triangle',height:3}),['*  ','** ','***']);
assert.deepEqual(draw_Triangle({type:'left_triangle',height:5}),["*    ","**   ","***  ","**** ","*****"]);
assert.deepEqual(draw_Triangle({type:'right_triangle',height:1}),["*"]);
assert.deepEqual(draw_Triangle({type:'right_triangle',height:2}),[" *","**"]);
assert.deepEqual(draw_Triangle({type:'right_triangle',height:3}),["  *"," **","***"]);
assert.deepEqual(draw_Triangle({type:'right_triangle',height:5}),["    *","   **","  ***"," ****","*****"]);
