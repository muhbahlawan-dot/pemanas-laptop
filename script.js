console.log('belajar gate & looping');

// if else
let nilai = 98;

if (nilai >= 90) {
    console.log('Nilai kamu A!!');
}else if (nilai >= 80){
    console.log('Nilai kamu B');
}else{
    console.log('Nilai kamu C');
}

let tanggal = '24-01';

switch (tanggal){
    case '17-08':
        console.log('Hari ini adalah hari kemerdekaan');
        break;

    case '24-01':
        console.log('Hari ini kamu ulang tahun');
        break;

    case '01-01':
        console.log('Selamat tahun baru');
        break;

    default:
        console.log('Hari biasa');
        break;
}

//Looping
for (let angka = 5; angka >= 1; angka--) {
    console.log('Angka ke:' + angka);
    
}

