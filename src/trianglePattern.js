const genPattern = function(start,limit,pattern) {
  let output = "";
  while(start<=limit) {
    output = output+pattern;
    start++;
  }
  return(output);
}

const genLeftTriangle=function(height) {
  let output="";
  for(let heightLimit=1; heightLimit<=height; heightLimit++) {
    let width=1;
    output=output+genPattern(width,heightLimit,"*");
    output=output+"\n";
  }
  return(output);
}

const genRightTriangle=function(height) {
  let output="";
  for(let heightLimit=1; heightLimit<=height; heightLimit++) {
    let blanks=height-heightLimit;
    let width=heightLimit;
    output=output+genPattern(1,blanks," ");
    output=output+genPattern(1,width,"*");
    output=output+"\n";
  }
  return(output);
}

if(process.argv[2] == "left"){
  console.log(genLeftTriangle(process.argv[3]));
}
if(process.argv[2] == "right"){
  console.log(genRightTriangle(process.argv[3]));
}
