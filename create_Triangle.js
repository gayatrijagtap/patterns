const main = require('./src/patternsLib.js').draw_Triangle;

let type = process.argv[2];
let height = +process.argv[3];

console.log(main(type,height));
