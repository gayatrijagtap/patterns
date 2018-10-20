const genPattern = function(start,limit,character) {
  let output = "";
  while(start<limit) {
    output=output+character;
    start++;
  }
  return(output);
}

const joinLines = function(prev,current,seperator) {
  return(prev+current+seperator);
}

const createFilledRectangle = function(width,height) {
  let output = "";
  let heightLimit = 0;
  while(heightLimit<height) {
    output=joinLines(output,genPattern(0,width,"*"),"\n");
    heightLimit++;
  }
  return(output);
}

const createEmptyRectangle = function(width,height) {
  let output = "";
  let heightLimit=1;
  output=joinLines(output,genPattern(0,width,"*"),"\n");
  heightLimit++;
  while(heightLimit<height) {
    output=output+"*"+genPattern(1,width-1," ")+"*"+"\n"
    heightLimit++;
  }
  if(heightLimit <= height){
    output=joinLines(output,genPattern(0,width,"*"),"");
  }
  return(output);
}

const createAlternatingRectangle = function(width,height) {
  let output = "";
  let heightLimit = 1;
  while(heightLimit<=height) {
    output=joinLines(output,genPattern(0,width,"*"),"\n");
    heightLimit++;
    if(heightLimit<=height) {
      output=joinLines(output,genPattern(0,width,"-"),"\n");
      heightLimit++;
    }
  }
  return(output);
}

const createLeftTriangle=function(height) {
  let output="";
  for(let heightLimit=1; heightLimit<=height; heightLimit++) {
    let width=1;
    output=output+genPattern(width,heightLimit+1,"*");
    output=output+"\n";
  }
  return(output);
}

const createRightTriangle=function(height) {
  let output="";
  for(let heightLimit=1; heightLimit<=height; heightLimit++) {
    let blanks=height-heightLimit;
    let width=heightLimit;
    output=output+genPattern(1,blanks+1," ");
    output=output+genPattern(1,width+1,"*");
    output=output+"\n";
  }
  return(output);
}

const genLine = function(numOfChar,character) {
  let result = "";
  for(let charNum=0; charNum<numOfChar; charNum++) {
    result = result+character;
  }
  return(result);
}

const filledFirstHalf = function(height) {
  let numOfSpaces = (height/2)-1;
  let result = "";
  for(let lineNum=1; lineNum<=height; lineNum+=2) {
    result = result+genLine(numOfSpaces," ");
    numOfSpaces--;
    result = result+genLine(lineNum,"*")+"\n";
  }
  return(result);
}

const filledSecondHalf = function(height) {
  let numOfSpaces = 1;
  let result = "";
  for(let lineNum=height-2; lineNum>0; lineNum-=2) {
    result = result+genLine(numOfSpaces," ");
    numOfSpaces++;
    result = result+genLine(lineNum,"*")+"\n";
  }
  return(result);
}

const createFilledDiamond = function(height) {
  if(height%2==0) {
    height = height - 1;
  }
  let firstHalf = filledFirstHalf(height);
  let secondHalf = filledSecondHalf(height);
  let result = firstHalf+secondHalf;
  return(result);
}

const hollowFirstHalf = function(height) {
  let numOfSpaces = Math.ceil(height/2);
  let result = "";
  result += genLine(numOfSpaces," ")+"*";
  for(let lineNum=1; lineNum<height; lineNum+=2) {
    numOfSpaces--;
    result += "\n"+genLine(numOfSpaces," ")+"*"+genLine(lineNum," ")+"*";
  }
  return(result);
}

const hollowSecondHalf = function(height) {
  let numOfSpaces = 2;
  let result = "";
  for(let lineNum=height-4; lineNum>=1; lineNum-=2) {
    result += "\n"+genLine(numOfSpaces," ")+"*"+genLine(lineNum," ")+"*";
    numOfSpaces++;
  }
  result += "\n"+genLine(numOfSpaces," ")+"*";
  return(result);
}

const createHollowDiamond = function(height) {
  if(height%2==0) {
    height = height - 1;
  }
  let result = hollowFirstHalf(height)+hollowSecondHalf(height);
  return(result);
}

const angledFirstHalf = function(height) {
  let numOfSpaces = Math.ceil(height/2);
  let result = "";
  result += genLine(numOfSpaces," ")+"*";
  for(let lineNum=1; lineNum<height-2; lineNum+=2) {
    numOfSpaces--;
    result += "\n"+genLine(numOfSpaces," ")+"/"+genLine(lineNum," ")+"\\";
  }
  numOfSpaces--;
  result += "\n"+genLine(numOfSpaces," ")+"*"+genLine(height-2," ")+"*";
  return(result);
}

const angledSecondHalf = function(height) {
  let numOfSpaces = 2;
  let result = "";
  for(let lineNum=height-4; lineNum>=1; lineNum-=2) {
    result += "\n"+genLine(numOfSpaces," ")+"\\"+genLine(lineNum," ")+"/";
    numOfSpaces++;
  }
  result += "\n"+genLine(numOfSpaces," ")+"*";
  return(result);
}

const createAngledDiamond = function(height) {
  if(height%2==0) {
    height = height - 1;
  }
  let result = angledFirstHalf(height)+angledSecondHalf(height);
  return(result);
}

const draw_Rectangle = function(type,height,width) {
  let rectangleType = {};
  rectangleType['filled'] = createFilledRectangle(height,width);  rectangleType['empty'] = createEmptyRectangle(height,width);
  rectangleType['alternating'] = createAlternatingRectangle(height,width);

  return rectangleType[type];
}

const draw_Triangle = function(type,height) {
  let triangleType = {};
  triangleType['left'] = createLeftTriangle(height);
  triangleType['right'] = createRightTriangle(height);

  return triangleType[type];
}

const draw_Diamond = function(type,height) {
  let diamondType = {};
  diamondType['filled'] = createFilledDiamond(height);
  diamondType['hollow'] = createHollowDiamond(height);
  diamondType['angled'] = createAngledDiamond(height);

  return diamondType[type];
}

exports.draw_Diamond = draw_Diamond;
exports.draw_Rectangle = draw_Rectangle;
exports.draw_Triangle = draw_Triangle;
