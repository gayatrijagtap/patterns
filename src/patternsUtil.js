const repeatChar = function(start,limit,character) {
  let output = "";
  while(start<limit) {
    output=output+character;
    start++;
  }
  return(output);
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
