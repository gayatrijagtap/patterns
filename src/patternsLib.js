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
  let output="";
  for(let heightLimit=1; heightLimit<=height; heightLimit++) {
    let width=1;
    output=output+generatePattern(width,heightLimit+1,"*");
    output=output+"\n";
  }
  return(output);
}

const createRightTriangle=function(height) {
  let output="";
  for(let heightLimit=1; heightLimit<=height; heightLimit++) {
    let blanks=height-heightLimit;
    let width=heightLimit;
    output=output+generatePattern(1,blanks+1," ");
    output=output+generatePattern(1,width+1,"*");
    output=output+"\n";
  }
  return(output);
}

const filledFirstHalf = function(height) {
  let numOfSpaces = (height/2)-1;
  let result = "";
  for(let lineNum=1; lineNum<=height; lineNum+=2) {
    result = result+generateLine(numOfSpaces," ");
    numOfSpaces--;
    result = result+generateLine(lineNum,"*")+"\n";
  }
  return(result);
}

const filledSecondHalf = function(height) {
  let numOfSpaces = 1;
  let result = "";
  for(let lineNum=height-2; lineNum>0; lineNum-=2) {
    result = result+generateLine(numOfSpaces," ");
    numOfSpaces++;
    result = result+generateLine(lineNum,"*")+"\n";
  }
  return(result);
}

const createFilledDiamond = function(height) {
  if(height%2==0) {
    height = height - 1;
  }
  if(height<3) {
    return "*";
  }
  let firstHalf = filledFirstHalf(height);
  let secondHalf = filledSecondHalf(height);
  let result = firstHalf+secondHalf;
  return(result);
}

const hollowFirstHalf = function(height) {
  let numOfSpaces = Math.ceil(height/2);
  let result = "";
  result += generateLine(numOfSpaces," ")+"*";
  for(let lineNum=1; lineNum<height; lineNum+=2) {
    numOfSpaces--;
    result += "\n"+generateLine(numOfSpaces," ")+"*"+generateLine(lineNum," ")+"*";
  }
  return(result);
}

const hollowSecondHalf = function(height) {
  let numOfSpaces = 2;
  let result = "";
  for(let lineNum=height-4; lineNum>=1; lineNum-=2) {
    result += "\n"+generateLine(numOfSpaces," ")+"*"+generateLine(lineNum," ")+"*";
    numOfSpaces++;
  }
  result += "\n"+generateLine(numOfSpaces," ")+"*";
  return(result);
}

const createHollowDiamond = function(height) {
  if(height%2==0) {
    height = height - 1;
  }
  if(height<3) {
    return "*";
  }
  let result = hollowFirstHalf(height)+hollowSecondHalf(height);
  return(result);
}

const angledFirstHalf = function(height) {
  let numOfSpaces = Math.ceil(height/2);
  let result = "";
  result += generateLine(numOfSpaces," ")+"*";
  for(let lineNum=1; lineNum<height-2; lineNum+=2) {
    numOfSpaces--;
    result += "\n"+generateLine(numOfSpaces," ")+"/"+generateLine(lineNum," ")+"\\";
  }
  numOfSpaces--;
  result += "\n"+generateLine(numOfSpaces," ")+"*"+generateLine(height-2," ")+"*";
  return(result);
}

const angledSecondHalf = function(height) {
  let numOfSpaces = 2;
  let result = "";
  for(let lineNum=height-4; lineNum>=1; lineNum-=2) {
    result += "\n"+generateLine(numOfSpaces," ")+"\\"+generateLine(lineNum," ")+"/";
    numOfSpaces++;
  }
  result += "\n"+generateLine(numOfSpaces," ")+"*";
  return(result);
}

const createAngledDiamond = function(height) {
  if(height%2==0) {
    height = height - 1;
  }
  if(height<3) {
    return "*";
  }
  let result = angledFirstHalf(height)+angledSecondHalf(height);
  return(result);
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

  return triangleType[type];
}

const draw_Diamond = function(patternInfo) {
  let {type,height} = patternInfo;

  let diamondType = {};
  diamondType['filled'] = createFilledDiamond(height);
  diamondType['hollow'] = createHollowDiamond(height);
  diamondType['angled'] = createAngledDiamond(height);

  return diamondType[type];
}

exports.draw_Diamond = draw_Diamond;
exports.draw_Rectangle = draw_Rectangle;
exports.draw_Triangle = draw_Triangle;
