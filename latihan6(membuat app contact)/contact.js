const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
});

const folderPath = './data';
const filePath = './data/contact.json';

// 1. Membuat folder 'data' jika belum ada
if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
}

// 2. Membuat file 'contact.json' jika belum ada
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf-8');
}

// 3. Fungsi pembantu untuk mengajukan pertanyaan menggunakan Promise (P besar)
const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve) => {
        rl.question(pertanyaan, (jawaban) => {
            resolve(jawaban);
        });
    });
};

const simpanContact = (nama, email, no) => {
    const contact_data = { nama, email, no }; // Data baru
    
    const isi_contact = fs.readFileSync(filePath, 'utf-8'); // Membaca file json
    const contact = JSON.parse(isi_contact); // Mengubah JSON menjadi Array JavaScript

    contact.push(contact_data); // Menambahkan data baru ke dalam array

    // Menyimpan kembali array yang diperbarui ke file JSON
    fs.writeFileSync(filePath, JSON.stringify(contact, null, 2));

    console.log('Terima kasih, data berhasil disimpan!');
    rl.close();

};

module.exports = {tulisPertanyaan, simpanContact};