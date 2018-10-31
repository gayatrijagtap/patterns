const repeatChar = function(times,character) {
  return (new Array(times).fill(character).join(''));
}

exports.repeatChar = repeatChar;

const joinLines = function(prev,current,seperator) {
  return(seperator+prev+current);
}

exports.joinLines = joinLines;

const generateLine = function(numOfChar,character) {
  let result = "";
  for(let charNum=0; charNum<numOfChar; charNum++) {
    result = result+character;
  }
  return(result);
}

exports.generateLine = generateLine;

const getPatternInfo = function(userArgs) {
  let patternInfo = {};
  patternInfo.type = userArgs[2];
  patternInfo.height = +userArgs[3];
  patternInfo.width = +userArgs[4];
  return patternInfo;
}

exports.getPatternInfo = getPatternInfo;

const addCharAtEdges = function( startEdgeChar,endEdgeChar,text ) {
  return startEdgeChar+text+endEdgeChar;
}

exports.addCharAtEdges = addCharAtEdges;

const mirrorPattern = function(pattern) {
  let mirroredPattern = [];
  for (let index = 0; index<pattern.length; index++) {
    mirroredPattern.unshift(pattern[index]);
  }
  return mirroredPattern;
}

exports.mirrorPattern = mirrorPattern;

const createDiamondFirstHalf = function(height,startEdgeChar,middleEdgeChar,endEdgeChar) {
  let numOfSpaces = Math.ceil(height/2-1);
  let diamond = [];
  diamond.push(repeatChar(numOfSpaces," ")+'*'+repeatChar(numOfSpaces," "));
  for(let lineNum=1; lineNum<height-2; lineNum+=2) {
    numOfSpaces--;
    diamond.push(repeatChar(numOfSpaces," ")+startEdgeChar+repeatChar(lineNum,middleEdgeChar)+endEdgeChar+repeatChar(numOfSpaces," "));
  }
  numOfSpaces--;
  diamond.push(repeatChar(numOfSpaces," ")+'*'+repeatChar(height-2,middleEdgeChar)+'*');
  return diamond;
}

exports.createDiamondFirstHalf = createDiamondFirstHalf;

const createDiamondSecondHalf = function(height,startEdgeChar,middleEdgeChar,endEdgeChar) {
  let numOfSpaces = 1;
  let diamond = [];
  for(let lineNum=height-4; lineNum>=1; lineNum-=2) {
    diamond.push(repeatChar(numOfSpaces," ")+startEdgeChar+repeatChar(lineNum,middleEdgeChar)+endEdgeChar+repeatChar(numOfSpaces," "));
    numOfSpaces++;
  }
  diamond.push(repeatChar(numOfSpaces," ")+"*"+repeatChar(numOfSpaces," "));
  return diamond;
}

exports.createDiamondSecondHalf = createDiamondSecondHalf;

const createTriangle = function(triangleType,height) {
  let triangle = [];
  for(let rowWidth=1; rowWidth<=height; rowWidth++) {
    let blanks=height-rowWidth;
    if(triangleType == 'right_triangle') {
      triangle.push(repeatChar(blanks,' ')+repeatChar(rowWidth,'*'));
    }
    if(triangleType == 'left_triangle') {
      triangle.push(repeatChar(rowWidth,"*")+repeatChar(blanks,' '));
    }
  }
  return triangle;
}

exports.createTriangle = createTriangle;

const readUserArgs = function(userArgs) {
  let pattern1 = userArgs[2].split('_')[1];
  let pattern2 = '';
  let patternInfo = [];
  if(pattern1 == 'rectangle') {
    patternInfo[0] = {type:userArgs[2],
                            height:+userArgs[3],
                            width:+userArgs[4]
    }
    patternInfo[1] = {type:userArgs[5],
                            height:+userArgs[6],
                            width:+userArgs[7]
    }
    pattern2 = userArgs[5];
  }

  if(pattern1 != 'rectangle') {
    patternInfo[0] = {type:userArgs[2],
                            height:+userArgs[3],
    }
    patternInfo[1] = {type:userArgs[4],
                            height:+userArgs[5],
                            width:+userArgs[6]
    }
    pattern2 = userArgs[4];
  }
  patternInfo[2] = pattern1;
  patternInfo[3] = pattern2;

  return patternInfo;
}

exports.readUserArgs = readUserArgs;

const {draw_Rectangle,draw_Triangle,draw_Diamond} = require('./patternsLib.js');

const drawFirstPattern = function(patternsInfo) {
  let firstPatternInfo = patternsInfo[0];
  let patternOne = [];
  if(patternsInfo[2] == 'rectangle')
    patternOne = draw_Rectangle(firstPatternInfo);
  if(patternsInfo[2] == 'triangle')
    patternOne = draw_Triangle(firstPatternInfo);
  if(patternsInfo[2] == 'diamond')
    patternOne = draw_Diamond(firstPatternInfo);
  return patternOne;
}
exports.drawFirstPattern = drawFirstPattern;

const drawSecondPattern = function(patternInfo) {
  let secondPatternInfo = patternInfo[1];
  let patternTwo = [];
  let {type} = secondPatternInfo;
  type = type.split('_')[1];
  if(type == 'rectangle') 
    patternTwo = draw_Rectangle(secondPatternInfo);
  if(type == 'triangle')
    patternTwo = draw_Triangle(secondPatternInfo);
  if(type == 'diamond')
    patternTwo = draw_Diamond(secondPatternInfo);
  return patternTwo;
}

exports.drawSecondPattern = drawSecondPattern;

const mergePatterns = function(firstPattern,secondPattern) {
  let mergedPattern = [];
  let shorterPattern,largerPattern,largerLen,shorterLen;
  if(firstPattern.length <= secondPattern.length) {
    shorterPattern = firstPattern;
    largerPattern = secondPattern;
    shorterLen = firstPattern.length;
    largerLen = secondPattern.length;
  } else {
    shorterPattern = secondPattern;
    largerPattern = firstPattern;
    shorterLen = secondPattern.length;
    largerLen = firstPattern.length;
  }
  let width = shorterPattern[0].split('').length;
  for ( let index = 0; index < largerLen; index++ ) {
    if(index >= shorterLen) {
      shorterPattern[index] = repeatChar(width,' ');
    }
    mergedPattern[index] = [ firstPattern[index],secondPattern[index] ];
  }
  return mergedPattern;
}

exports.mergePatterns = mergePatterns;

const printPattern = function(pattern) {
  for(let index = 0; index<pattern.length; index++) {
    pattern[index] = (pattern[index]).join('  ');
  }
  let printedPattern = pattern.join('\n');
  return printedPattern;
}

exports.printPattern = printPattern;
