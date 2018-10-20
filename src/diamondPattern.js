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

const genFilledDiamond = function(height) {
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

const genHollowDiamond = function(height) {
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

const genAngledDiamond = function(height) {
  let result = angledFirstHalf(height)+angledSecondHalf(height);
  return(result);
}

const generateDiamond = function(typeOfDiamond,height) {
  let result = "";
  let heightIsEven = (height%2 == 0);
  if(heightIsEven) {
    height--;
  }
  if(typeOfDiamond == "filled") {
    result = genFilledDiamond(height);
  }
  if(typeOfDiamond == "hollow") {
    result = genHollowDiamond(height);
  }
  if(typeOfDiamond == "angled") {
    result = genAngledDiamond(height);
  }
  return(result);
}

let typeOfDiamond = process.argv[2];
let height = process.argv[3];
console.log(generateDiamond(typeOfDiamond,height));
