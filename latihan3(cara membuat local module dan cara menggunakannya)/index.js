
// const fs = require(''); // karena tidak ada (./) require akan mencari di core module dan jika tidak ada lagi maka require akan mencari di node_modules
// const cetaknama = require('./coba'); // ini adalah local module karena menggunakan (./)
// const moment = require('moment'); // ini adalah third party module / npm module / node_module


// jika di dalam export terdapat dua module harus menggunakan method
const coba = require('./coba'); // coba adalah sebagai objek


console.log(coba.cetaknama('Budi Santoso'), coba.pi);
console.log(coba.mahasiswa.cetakmh(),'.',  coba.mahasiswa.cetakmhs());
console.log(new coba.Orang());
