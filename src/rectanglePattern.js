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

const filled = function(width,height) {
  let output = "";
  let heightLimit = 0;
  while(heightLimit<height) {
    output=joinLines(output,genPattern(0,width,"*"),"\n");
    heightLimit++;
  }
  return(output);
}

const empty = function(width,height) {
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

const alternating = function(width,height) { 
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

const callingFunc = function(pattern) {
  if(pattern == "filled") {
    return(filled(+process.argv[3],+process.argv[4]));
  }
  if(pattern == "empty") {
    return(empty(+process.argv[3],+process.argv[4]));
  }
  if(pattern == "alternating") {
    return(alternating(+process.argv[3],+process.argv[4]));
  }
}

console.log(callingFunc(process.argv[2]));
