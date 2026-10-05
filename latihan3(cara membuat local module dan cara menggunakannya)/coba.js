function cetaknama(nama) {
    return `Halo, nama saya ${nama}`;
}

const pi = 3.14;
const mahasiswa = {
    nama : 'budi sanjaya',
    umur : '43',
    cetakmhs : (nama, umur) => {//arrow fuction
        return`Halo, nama saya ${nama} dan umur saya ${umur}`;
    },

    cetakmh() {//tanpa parameter menggunakan (this.)
        return `Halo, nama saya ${this.nama} dan umur saya ${this.umur}`;
    }


}; 

class Orang {
    constructor( ) {
        console.log('objek orang telah dibuat!!');
    }
}

// cara meng exports beberapa code sekaligus
// jika di dalam export terdapat dua module harus menggunakan method
// module.exports = cetaknama; jika hanya satu code
// module.exports.pi = pi; jika ingin lebih dari satu yang di export (module.export.method = )

// module.exports.cetaknama = cetaknama; // jika ingin me require sesuatu bisa menggunakan (module.exports = nama fuctions misalnya). Ini di gunakan untuk menakses code dari suatu file, agar dapat digunakan oleh file lain.
// module.exports.pi = pi;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;


//cara meng export banyak code hanya dengan satu module
// module.exports = { 
//  cetaknama : cetaknama, 
//  pi : pi, 
//  mahasiswa : mahasiswa, 
//  Orang : Orang
// };


module.exports = {cetaknama, pi, mahasiswa, Orang};