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
