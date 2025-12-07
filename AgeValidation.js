const input = require('prompt-sync')({sigint: true})

const nama = input("Masukan nama: ");
const umur = input("Masukan umur: ");

if (umur < 21) {
    console.log(`Maaf ${nama}, umur kamu kurang ${21-umur} tahun lagi`)
} else {
    
}