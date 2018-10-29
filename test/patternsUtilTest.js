const assert = require('assert');

const { repeatChar } = require('../src/patternsUtil.js');
assert.equal(repeatChar(1,'*'),'*');
assert.equal(repeatChar(2,'$'),'$$');
assert.equal(repeatChar(3,'#'),'###');
assert.equal(repeatChar(4,'%'),'%%%%');

const { joinLines } = require('../src/patternsUtil.js');
assert.equal(joinLines('*','*','*'),'***');
assert.equal(joinLines('**','**','#'),'#****');
assert.equal(joinLines('#','#',' '),' ##');
assert.equal(joinLines('##','##','\n'),'\n####');

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

const { addCharAtEdges } = require('../src/patternsUtil.js');
assert.equal(addCharAtEdges('*','*','hello'),'*hello*');
assert.equal(addCharAtEdges('#','*','hello'),'#hello*');
assert.equal(addCharAtEdges(' ',' ','hello'),' hello ');
assert.equal(addCharAtEdges('*',' ','hello'),'*hello ');

const { mirrorPattern } = require('../src/patternsUtil.js');
assert.deepEqual(mirrorPattern(['*','**']),['**','*']);
assert.deepEqual(mirrorPattern([' *','**']),['**',' *']);
assert.deepEqual(mirrorPattern(['*','**','***']),['***','**','*']);
assert.deepEqual(mirrorPattern(['  *',' **','***']),['***',' **','  *']);

const { createDiamondFirstHalf } = require('../src/patternsUtil.js');
assert.deepEqual(createDiamondFirstHalf(5,'/',' ','\\'),[ '  *  ', ' / \\ ', '*   *' ]);
assert.deepEqual(createDiamondFirstHalf(5,'*','*','*'),[ '  *  ', ' *** ', '*****' ]);


const { createDiamondSecondHalf } = require('../src/patternsUtil.js');
assert.deepEqual(createDiamondSecondHalf(5,'\\',' ','/'),[ ' \\ / ', '  *  ' ]);
assert.deepEqual(createDiamondSecondHalf(5,'*','*','*'),[ ' *** ', '  *  ' ]);

const { createTriangle } = require('../src/patternsUtil.js');
assert.deepEqual(createTriangle('left',3),[ '*  ', '** ', '***' ]);
assert.deepEqual(createTriangle('right',3),[ '  *', ' **', '***' ]);
assert.deepEqual(createTriangle('left',1),['*']);
assert.deepEqual(createTriangle('right',1),['*']);

const { readUserArgs } = require('../src/patternsUtil.js');
assert.deepEqual(readUserArgs([,,'filled',5,5,'hollow',5,5]),{firstPatternInfo : {type:'filled',height:5,width:5 } , secondPatternInfo : {type:'hollow',height:5,width:5}});
assert.deepEqual(readUserArgs([,,'empty',2,2,'left',3]),{firstPatternInfo:{type:'empty',height:2,width:2},secondPatternInfo:{type:'left',height:3,width:undefined}});
assert.deepEqual(readUserArgs([,,'alternating',5,5,'right',6]),{firstPatternInfo:{type:'alternating',height:5,width:5},secondPatternInfo:{type:'right',height:6,width:undefined}});
assert.deepEqual(readUserArgs([,,'filled',1,1,'empty',2,2]),{firstPatternInfo:{type:'filled',height:1,width:1},secondPatternInfo:{type:'empty',height:2,width:2}});
