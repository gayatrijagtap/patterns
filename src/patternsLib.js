const { repeatChar } = require('./patternsUtil.js');
const { joinLines } = require('./patternsUtil.js');
const { addCharAtEdges } = require('./patternsUtil.js');

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
  for(let heightLimit=1; heightLimit<=height; heightLimit++) {
    let width=0;
    triangle[ heightLimit-1 ] = repeatChar(heightLimit,"*");
  }
  return triangle;
}

const createRightTriangle=function(height) {
  let output="";
  let triangle = [];
  for(let heightLimit=1; heightLimit<=height; heightLimit++) {
    let blanks=height-heightLimit;
    let width=heightLimit;
    triangle[heightLimit-1] = repeatChar(blanks,' ')+repeatChar(width,'*');
  }
  return triangle;
}

const filledFirstHalf = function(height) {
  let numOfSpaces = Math.ceil((height/2)-1);
  let diamond = [];
  let index = 0;
  for(let lineNum=1; lineNum<=height; lineNum+=2) {
    diamond[ index ] = repeatChar(numOfSpaces," ");
    numOfSpaces--;
    diamond[ index ] = diamond[ index ].concat(repeatChar(lineNum,"*"));
    index++;
  }
  return diamond;
}

const filledSecondHalf = function(height) {
  let numOfSpaces = 1;
  let diamond = [];
  let index = 0;
  for(let lineNum=height-2; lineNum>0; lineNum-=2) {
    diamond[index] = repeatChar(numOfSpaces," ");
    numOfSpaces++;
    diamond[index] = diamond[index].concat(repeatChar(lineNum,"*"));
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
  diamond[index] = repeatChar(numOfSpaces," ")+"*";
  for(let lineNum=1; lineNum<height; lineNum+=2) {
    index++;
    numOfSpaces--;
    diamond[ index ] = repeatChar(numOfSpaces," ")+"*"+repeatChar(lineNum," ")+"*";
  }
  return diamond;
}

const hollowSecondHalf = function(height) {
  let numOfSpaces = 2;
  let result = "";
  let diamond = [];
  let index = 0;
  for(let lineNum=height-4; lineNum>=1; lineNum-=2) {
    diamond[index] = repeatChar(numOfSpaces," ")+"*"+repeatChar(lineNum," ")+"*";
    numOfSpaces++;
    index++;
  }
  diamond[index] = repeatChar(numOfSpaces," ")+"*";
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
  diamond[index] = repeatChar(numOfSpaces," ")+"*";
  for(let lineNum=1; lineNum<height-2; lineNum+=2) {
    numOfSpaces--;
    index++;
    diamond[index] = repeatChar(numOfSpaces," ")+"/"+repeatChar(lineNum," ")+"\\";
  }
  numOfSpaces--;
  diamond[index+1] = repeatChar(numOfSpaces," ")+"*"+repeatChar(height-2," ")+"*";
  return diamond;
}

const angledSecondHalf = function(height) {
  let numOfSpaces = 2;
  let result = "";
  let diamond = [];
  let index = 0;
  for(let lineNum=height-4; lineNum>=1; lineNum-=2) {
    diamond[index] = repeatChar(numOfSpaces," ")+"\\"+repeatChar(lineNum," ")+"/";
    numOfSpaces++;
    index++;
  }
  diamond[index] = repeatChar(numOfSpaces," ")+"*";
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
