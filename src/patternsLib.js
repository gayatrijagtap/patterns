const { generatePattern } = require('./patternsUtil.js');
const { joinLines } = require('./patternsUtil.js');
const { generateLine } = require('./patternsUtil.js');

const createFilledRectangle = function(width,height) {
  let rectangle = [];
  for (let heightLimit = 0; heightLimit<height; heightLimit++ ) {
    rectangle[ heightLimit ] = generatePattern(0,width,"*");
  }
  return rectangle;
}

const createEmptyRectangle = function(width,height) {
  let rectangle = [];
  let heightLimit=0;
  rectangle[ heightLimit ] = generatePattern(0,width,"*");

  for( heightLimit = 1; heightLimit<height-1; heightLimit++ ) {
    rectangle[ heightLimit ] = "*"+generatePattern(1,width-1," ")+"*";
  }
  if(heightLimit < height){
    rectangle[ heightLimit ] = generatePattern(0,width,"*");
  }
  return rectangle;
}

const createAlternatingRectangle = function(width,height) {
  let rectangle = [];
  for ( let heightLimit = 0; heightLimit<height; heightLimit++ ) {
    rectangle[ heightLimit ] = generatePattern(0,width,"*");
    heightLimit++;
    if(heightLimit<height) {
      rectangle[ heightLimit ] = generatePattern(0,width,"-");
    }
  }
  return rectangle;
}

const createLeftTriangle=function(height) {
  let triangle = [];
  for(let heightLimit=1; heightLimit<=height; heightLimit++) {
    let width=0;
    triangle[ heightLimit-1 ] = generatePattern(width,heightLimit,"*");
  }
  return triangle;
}

const createRightTriangle=function(height) {
  let output="";
  let triangle = [];
  for(let heightLimit=1; heightLimit<=height; heightLimit++) {
    let blanks=height-heightLimit;
    let width=heightLimit;
    triangle[heightLimit-1] = generatePattern(1,blanks+1," ").concat(generatePattern(1,width+1,"*"));
  }
  return triangle;
}

const filledFirstHalf = function(height) {
  let numOfSpaces = (height/2)-1;
  let diamond = [];
  let index = 0;
  for(let lineNum=1; lineNum<=height; lineNum+=2) {
    diamond[ index ] = generateLine(numOfSpaces," ");
    numOfSpaces--;
    diamond[ index ] = diamond[ index ].concat(generateLine(lineNum,"*"));
    index++;
  }
  return diamond;
}

const filledSecondHalf = function(height) {
  let numOfSpaces = 1;
  let diamond = [];
  let index = 0;
  for(let lineNum=height-2; lineNum>0; lineNum-=2) {
    diamond[index] = generateLine(numOfSpaces," ");
    numOfSpaces++;
    diamond[index] = diamond[index].concat(generateLine(lineNum,"*"));
    index++;
  }
  return diamond;
}

const createFilledDiamond = function(height) {
  if(height%2==0) {
    height = height - 1;
  }
  if(height<3) {
    return "*";
  }
  let diamond = filledFirstHalf(height);
  let diamondSecondHalf = filledSecondHalf(height);
  for( let index = 0; index<diamondSecondHalf.length; index++ ) {
    diamond.push(diamondSecondHalf[index]);
  }
  return diamond;
}

const hollowFirstHalf = function(height) {
  let numOfSpaces = Math.ceil(height/2);
  let diamond = [];
  let index = 0;
  diamond[index] = generateLine(numOfSpaces," ")+"*";
  for(let lineNum=1; lineNum<height; lineNum+=2) {
    index++;
    numOfSpaces--;
    diamond[ index ] = generateLine(numOfSpaces," ")+"*"+generateLine(lineNum," ")+"*";
  }
  return diamond;
}

const hollowSecondHalf = function(height) {
  let numOfSpaces = 2;
  let result = "";
  let diamond = [];
  let index = 0;
  for(let lineNum=height-4; lineNum>=1; lineNum-=2) {
    diamond[index] = generateLine(numOfSpaces," ")+"*"+generateLine(lineNum," ")+"*";
    numOfSpaces++;
    index++;
  }
  diamond[index] = generateLine(numOfSpaces," ")+"*";
  return diamond;
}

const createHollowDiamond = function(height) {
  if(height%2==0) {
    height = height - 1;
  }
  if(height<3) {
    return "*";
  }
  let diamond = hollowFirstHalf(height);
  let diamondSecondHalf = hollowSecondHalf(height);
  for (let index = 0; index<diamondSecondHalf.length; index++) {
    diamond.push(diamondSecondHalf[index]);
  }
  return diamond;
}

const angledFirstHalf = function(height) {
  let numOfSpaces = Math.ceil(height/2);
  let diamond = [];
  let index = 0;
  diamond[index] = generateLine(numOfSpaces," ")+"*";
  for(let lineNum=1; lineNum<height-2; lineNum+=2) {
    numOfSpaces--;
    index++;
    diamond[index] = generateLine(numOfSpaces," ")+"/"+generateLine(lineNum," ")+"\\";
  }
  numOfSpaces--;
  diamond[index+1] = generateLine(numOfSpaces," ")+"*"+generateLine(height-2," ")+"*";
  return diamond;
}

const angledSecondHalf = function(height) {
  let numOfSpaces = 2;
  let result = "";
  let diamond = [];
  let index = 0;
  for(let lineNum=height-4; lineNum>=1; lineNum-=2) {
    diamond[index] = generateLine(numOfSpaces," ")+"\\"+generateLine(lineNum," ")+"/";
    numOfSpaces++;
    index++;
  }
  diamond[index] = generateLine(numOfSpaces," ")+"*";
  return diamond;
}

const createAngledDiamond = function(height) {
  if(height%2==0) {
    height = height - 1;
  }
  if(height<3) {
    return "*";
  }
  let diamond = angledFirstHalf(height);
  let diamondSecondHalf = angledSecondHalf(height);
  for (let index = 0; index<diamondSecondHalf.length; index++) {
    diamond.push(diamondSecondHalf[index]);
  }
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
