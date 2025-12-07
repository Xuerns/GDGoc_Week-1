const input = require('prompt-sync')({sigint: true})

const nama = input("Masukan nama: ")
const umur = Number(input("Masukan umur: "))

if (umur < 21) {
    console.log(`Maaf ${nama}, umur kamu kurang ${21-umur} tahun lagi`)
} else {
    const jumlahUang = Number(input("Masukan Jumlah Uang: "))
    if (jumlahUang < 500000) {
        console.log(`Maaf ${nama}, uang kamu cuma ${jumlahUang / 1000} ribu, datang lagi lain kali`)
    } else {
        console.log(`Selamat datang ${nama}`)
    }
}