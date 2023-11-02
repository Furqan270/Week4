function person(nama){
    console.log("nama saya " +nama)
}

person("budi")

function perkalian(nilai1,nilai2){
    return nilai1*nilai2
}
 hasil = perkalian(4,7)
console.log(hasil)

function perkalian_default(nilai1,nilai2 = 5 , nilai3){
    return nilai1 * nilai2 * nilai3
}

hasil = perkalian_default(3, 3 )
console.log(hasil)

let hasil_arrow = (nilai1,nilai2) => nilai1 * nilai2 
console.log(hasil_arrow(3,7))