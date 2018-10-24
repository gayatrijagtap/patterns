const assert = require('assert');

const { generatePattern } = require('../src/patternsUtil.js');
assert.equal(generatePattern(0,1,'*'),'*');
assert.equal(generatePattern(0,2,'$'),'$$');
assert.equal(generatePattern(0,3,'#'),'###');
assert.equal(generatePattern(0,4,'%'),'%%%%');

const { joinLines } = require('../src/patternsUtil.js');
assert.equal(joinLines('*','*','*'),'***');
assert.equal(joinLines('**','**','#'),'****#');
assert.equal(joinLines('#','#',' '),'## ');
assert.equal(joinLines('##','##','\n'),'####\n');

const { generateLine } = require('../src/patternsUtil.js');
assert.equal(generateLine(1,'*'),'*');
assert.equal(generateLine(2,'#'),'##');
assert.equal(generateLine(3,'$'),'$$$');
assert.equal(generateLine(4,'%'),'%%%%');

const { getPatternInfo } = require('../src/patternsUtil.js');
assert.deepEqual(getPatternInfo([,,'filled',5,5]),{type:'filled',height:5,width:5});
assert.deepEqual(getPatternInfo([,,'empty',2,2]),{type:'empty',height:2,width:2});
assert.deepEqual(getPatternInfo([,,'alternating',5,5]),{type:'alternating',height:5,width:5});
assert.deepEqual(getPatternInfo([,,'filled',1,1]),{type:'filled',height:1,width:1});
