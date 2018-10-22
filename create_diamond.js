const main = require('./src/patternsLib.js').draw_Diamond;

let type = process.argv[2];
let height = +process.argv[3];

exports.main = main;
console.log(main(type,height));
