const { repeatChar } = require('./patternsUtil.js');
const { joinLines } = require('./patternsUtil.js');
const { addCharAtEdges } = require('./patternsUtil.js');
const { mirrorPattern } = require('./patternsUtil.js');
const { createDiamondFirstHalf } = require('./patternsUtil.js');
const { createDiamondSecondHalf } = require('./patternsUtil.js');
const { createTriangle } = require('./patternsUtil.js');

const createFilledRectangle = function(width,height) {
  let rectangle = new Array(height).fill(repeatChar(width,'*'));
  return rectangle;
}

exports.createFilledRectangle = createFilledRectangle;

const createEmptyRectangle = function(width,height) {
  let rectangle = [];
  rectangle.unshift(repeatChar(width,"*"));
  rectangle[height-1] = repeatChar(width,'*');
  for( let index = 1; index<height-1; index++ ) {
    rectangle[ index ] = addCharAtEdges('*','*',repeatChar(width-2," "));
  }
  return rectangle;
}

exports.createEmptyRectangle = createEmptyRectangle;

const createAlternatingRectangle = function(width,height) {
  let rectangle = [];
  for ( let index = 0; index < height; index++ ) {
    rectangle.push(repeatChar(width,"*"));
    index++;
    if( index < height ) {
      rectangle.push(repeatChar(width,"-"));
    }
  }
  return rectangle;
}

exports.createAlternatingRectangle = createAlternatingRectangle;

const createLeftTriangle=function(height) {
  return createTriangle('left_triangle',height);
}

exports.createLeftTriangle = createLeftTriangle;

const mirrorLeftTriangle = function(height) {
  return mirrorPattern(createLeftTriangle(height));
}

const createRightTriangle=function(height) {
  return createTriangle('right_triangle',height);
}

exports.createRightTriangle = createRightTriangle;

const mirrorRightTriangle = function(height) {
  return mirrorPattern(createRightTriangle(height));
}

const createFilledDiamond = function(height) {
  let diamond = createDiamondFirstHalf(height,'*','*','*').concat(createDiamondSecondHalf(height,'*','*','*'));
  return diamond;
}

exports.createFilledDiamond = createFilledDiamond;

const createHollowDiamond = function(height) {
  let diamond = createDiamondFirstHalf(height,'*',' ','*').concat(createDiamondSecondHalf(height,'*',' ','*'));
  return diamond;
}

exports.createHollowDiamond = createHollowDiamond;

const createAngledDiamond = function(height) {
  let diamond = createDiamondFirstHalf(height,'/',' ','\\').concat(createDiamondSecondHalf(height,'\\',' ','/'));
  return diamond;
}

exports.createAngledDiamond = createAngledDiamond;

const draw_Rectangle = function(patternInfo) {
  let {type,height,width} = patternInfo;
  let rectangleType = {};
  rectangleType['filled_rectangle'] = createFilledRectangle(height,width);  
  rectangleType['empty_rectangle'] = createEmptyRectangle(height,width);
  rectangleType['alternating_rectangle'] = createAlternatingRectangle(height,width);

  let rectangle = rectangleType[type];
  rectangle = rectangle;
  return rectangle;
}

const draw_Triangle = function(patternInfo) {
  let {type,height} = patternInfo;

  let triangleType = {};
  triangleType['left_triangle'] = createLeftTriangle(height);
  triangleType['right_triangle'] = createRightTriangle(height);
  let triangle = triangleType[type];
  triangle = triangle;
  return triangle;
}

const draw_Diamond = function(patternInfo) {
  let {type,height} = patternInfo;
  if(height%2==0) 
    height--;
  if(height<3) 
    return ['*'];

  let diamondType = {};
  diamondType['filled_diamond'] = createFilledDiamond(height);
  diamondType['hollow_diamond'] = createHollowDiamond(height);
  diamondType['angled_diamond'] = createAngledDiamond(height);
  let array = diamondType[type];
  let diamond = [];
  for(let index = 0; index<array.length; index++) {
    diamond[index] = array[index];
  }
  diamond = diamond;
  return diamond;
}

exports.draw_Diamond = draw_Diamond;
exports.draw_Rectangle = draw_Rectangle;
exports.draw_Triangle = draw_Triangle;
