const jawaban = require('./contact');

const main = async () => {
    // Memanggil pertanyaan secara berurutan
    const nama = await jawaban.tulisPertanyaan('Masukkan nama anda: ');
    const email = await jawaban.tulisPertanyaan('Masukkan Email anda: ');
    const no = await jawaban.tulisPertanyaan('Masukkan noHP anda: ');

    jawaban.simpanContact(nama, email, no);
};

// Menjalankan fungsi utama
main();


//
// rl.question('Masukkan nama anda: ', (nama) => {
//     rl.question('Masukkan No HP anda: ', (no) => {

//         const contact_data = {nama, no};//data yang akan di tambahkan
//         const isi_contact = fs.readFileSync('data/contact.json', 'utf-8');//membaca file isi json
//         const contact = JSON.parse(isi_contact); // menggubahnya menjadi java script(agar berfungsi di code js)

//         contacts.push(contact_data);

//         fs.writeFileSync('dara/contact.json', JSON.stringify(constants));//mengubah data menjadi json dan menembahkannya ke contact.json


//         rl.close();
//     })
    
// }); 