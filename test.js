var tanya = true
while ( tanya ) {
    // komputer membangkitkan angka random
    var random = Math.floor(Math.random() * 10 ) + 1;
    console.log(random)

    // Player melakukan input
    var p = prompt('Pilih angka antara 1 - 10! \n (Anda memiliki 3 kesempatan)')

    // alur permainan
    var hasil = '';
    for( var chance = 3; chance >= 1; chance--){
        if(p == random){
            hasil = 'Benar'
            alert('Angka tebakan anda ' + hasil )
            break;
        } else if (p != random && chance > 1) {
            hasil = p < random ? 'Terlalu Rendah' : 'Terlalu Tinggi';
            p = prompt('Angka tebakan anda ' + hasil + ' \n Coba tebak lagi')
        } else if (p != random && chance == 1){
            hasil = 'Salah'
            alert('Angka tebakan anda ' + hasil + '\nKesempatan anda sudah habis')
        }
    }
        tanya = confirm('Apakah anda ingin Main lagi?')
} 
alert('Terimakasih')