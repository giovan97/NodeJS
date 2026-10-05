const validator = require('validator');
const chalk = require('chalk');

// Validator
// console.log(validator.isEmail('fhahfas@gmail.com'));// memvalidasi sebuah email (true/false)
// console.log(validator.isMobilePhone('085', 'id-ID')); memvalidasi apakah notp (t/f)
// console.log(validator.isNumeric('13414242fs'));// memvalidasi angka bukan huruf 


// Chalk
const pesan = chalk`jfalkfj {red aofja}ofaf`;
console.log(pesan);

console.log(chalk.green.bold(pesan));




