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
    if(triangleType == 'right') {
      triangle.push(repeatChar(blanks,' ')+repeatChar(rowWidth,'*'));
    }
    if(triangleType == 'left') {
      triangle.push(repeatChar(rowWidth,"*")+repeatChar(blanks,' '));
    }
  }
  return triangle;
}

exports.createTriangle = createTriangle;

const readUserArgs = function(userArgs) {
  let patternInfo = {};
  patternInfo.type1 = userArgs[2];
  patternInfo.height1 = userArgs[3];
  patternInfo.width1 = userArgs[4];
  patternInfo.type2 = userArgs[5];
  patternInfo.height2 = userArgs[6];
  patternInfo.width2 = userArgs[7];
  return patternInfo;
}

exports.readUserArgs = readUserArgs;
