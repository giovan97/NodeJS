

// let nama = 'budi';
// let halo = (n) => `Halo nama saya ${n}`; // fuction satu baris tidal memerlukan {}
// console.log(halo(nama));

// untuk menggunakan require + module harus memasukkan require ke dalam suatu variable
const cetaknama = require('./coba'); // cara memanggil file menggunakan ini lalu di tambahkan (./nama_file jika file berada pada saru folder, ../nama_file jika di luar/diatasnya forder, ./nama_file/ jika file berada di dalam folder. bisa di tuliskan nama file denggan extensi atau tidak )



// console.log('hello bro');
console.log(cetaknama('Budi Santoso'));
