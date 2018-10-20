const main = require('./src/patternsLib.js').draw_Rectangle;

let type = process.argv[2];
let height = +process.argv[3];
let width = +process.argv[4];

console.log(main(type,height,width));
