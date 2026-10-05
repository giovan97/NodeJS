//Core Module
//File System
//Memanggil module file system
const fs =  require('node:fs');

//  menuliskan string ke file(synchronous)
// try { // untuk menangkap eror

// fs.writeFileSync('data/test.txt', 'Hello world secara synchronous!');
// }catch(e){
//     console.log(e);
    
// }
// console.log(fs);

//  menuliskan string ke file(asynchronous)
// fs.writeFile('data/test.txt', 'Hello world secara Asynchronous', (e) => {
//     console.log(e);
// });


// membaca isi file secara synchronous
// const coba = fs.readFileSync('data/test.txt', 'utf-8');// bisa menggunakan utf-8 .Fungsi utama UTF-8 adalah menerjemahkan teks digital menjadi kode biner dan sebaliknya agar komputer dapat menampilkan berbagai karakter bahasa, simbol, dan emoji secara universal.
// console.log(coba);//.toString di gunakan untuk menggubah menjadi string

//mambaca isi file secara Asynchronous
// fs.readFile('data/test.txt', (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });


//Readline
//Memanggil module readline
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const n = readline.createInterface({ input, output });

//question = untuk menampilkan pertanyaan, (nama) = yang menanpung jawaban
n.question('Masukkan nama anda : ', (nama) => {
    n.question('Masukkan umur anda : ', (umur) => {

      //membuat variable yang menampung nama dan umur
      const data_orang = { nama , umur  };
      //mambaca isi file data_orang.json yang di ubah menjadi string lalu di simpan dalam variable bernama file
      const file = fs.readFileSync('data/data_orang.json', 'utf-8');
      //mengubah isi variable file dari string menjadi javascript menggunakan JSON.parse(file) lalu di simpan di variable data_orang_json
      const data_orang_json = JSON.parse(file);
      //setelah mendapatkan isi dari file.json yang telah menjadi js, isi nya di tambahkan menggunakan data_orang_json.push(data_oarng)
      data_orang_json.push(data_orang);

      //mengubah dari js menjadi json kembali agar bapat di masukkan ke .json menggunakan JSON.stringify(variable)
      const isi_json = JSON.stringify(data_orang_json, null, 2);

      //module.menulis file secara synchronous('folder/file tujuan', yang ingin di tuliskan, mendapatkan error jika mendapatkan error tampilkan (throw err))
      fs.writeFileSync('data/data_orang.json', isi_json , (err) => {
        if (err) throw err;

       
    });
    //pesan jika program berhasil
    console.log('Data berhasil di simpan');
    n.close(); //Untuk menutup program
  })
});
