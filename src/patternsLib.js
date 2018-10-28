const { repeatChar } = require('./patternsUtil.js');
const { joinLines } = require('./patternsUtil.js');
const { addCharAtEdges } = require('./patternsUtil.js');
const { mirrorPattern } = require('./patternsUtil.js');
const { createDiamondFirstHalf } = require('./patternsUtil.js');
const { createDiamondSecondHalf } = require('./patternsUtil.js');

const createFilledRectangle = function(width,height) {
  let rectangle = new Array(height).fill(repeatChar(width,'*'));
  return rectangle;
}

const createEmptyRectangle = function(width,height) {
  let rectangle = [];
  rectangle.unshift(repeatChar(width,"*"));
  rectangle[height-1] = repeatChar(width,'*');

  for( let index = 1; index<height-1; index++ ) {
    rectangle[ index ] = addCharAtEdges('*','*',repeatChar(width-2," "));
  }
  return rectangle;
}

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

const createLeftTriangle=function(height) {
  let triangle = [];
  for(let rowWidth=1; rowWidth <= height; rowWidth++) {
    let blanks=height-rowWidth;
    triangle.push(repeatChar(rowWidth,"*")+repeatChar(blanks,' '));
  }
  return triangle;
}

const mirrorLeftTriangle = function(height) {
  return mirrorPattern(createLeftTriangle(height));
}

const createRightTriangle=function(height) {
  let triangle = [];
  for(let rowWidth=1; rowWidth<=height; rowWidth++) {
    let blanks=height-rowWidth;
    triangle.push(repeatChar(blanks,' ')+repeatChar(rowWidth,'*'));
  }
  return triangle;
}

const mirrorRightTriangle = function(height) {
  return mirrorPattern(createRightTriangle(height));
}

const filledFirstHalf = function(height) {
  return createDiamondFirstHalf(height,'*','*','*');
}

const filledSecondHalf = function(height) {
  return createDiamondSecondHalf(height,'*','*','*'); 
}

const createFilledDiamond = function(height) {
  let diamond = filledFirstHalf(height).concat(filledSecondHalf(height));
  return diamond;
}

const hollowFirstHalf = function(height) {
  return createDiamondFirstHalf(height,'*',' ','*');
}

const hollowSecondHalf = function(height) {
  return createDiamondSecondHalf(height,'*',' ','*');
}

const createHollowDiamond = function(height) {
  let diamond = hollowFirstHalf(height).concat(hollowSecondHalf(height));
  return diamond;
}

const angledFirstHalf = function(height) {
  return createDiamondFirstHalf(height,'/',' ','\\');
}

const angledSecondHalf = function(height) {
  return createDiamondSecondHalf(height,'\\',' ','/');
}

const createAngledDiamond = function(height) {
  let diamond = angledFirstHalf(height).concat(angledSecondHalf(height));
  return diamond;
}

const draw_Rectangle = function(patternInfo) {
  let {type,height,width} = patternInfo;
  let rectangleType = {};
  rectangleType['filled'] = createFilledRectangle(height,width);  rectangleType['empty'] = createEmptyRectangle(height,width);
  rectangleType['alternating'] = createAlternatingRectangle(height,width);

  let rectangle = rectangleType[type];
  rectangle = rectangle.join('\n');
  return rectangle;
}

const draw_Triangle = function(patternInfo) {
  let {type,height} = patternInfo;

  let triangleType = {};
  triangleType['left'] = createLeftTriangle(height);
  triangleType['right'] = createRightTriangle(height);
  let triangle = triangleType[type];
  triangle = triangle.join('\n');
  return triangle;
}

const draw_Diamond = function(patternInfo) {
  let {type,height} = patternInfo;
  if(height%2==0) {
    height--;
  }
  if(height<3) {
    return '*';
  }

  let diamondType = {};
  diamondType['filled'] = createFilledDiamond(height);
  diamondType['hollow'] = createHollowDiamond(height);
  diamondType['angled'] = createAngledDiamond(height);
  let array = diamondType[type];
  let diamond = [];
  for(let index = 0; index<array.length; index++) {
    diamond[index] = array[index];
  }
  diamond = diamond.join('\n');
  return diamond;
}

exports.draw_Diamond = draw_Diamond;
exports.draw_Rectangle = draw_Rectangle;
exports.draw_Triangle = draw_Triangle;
