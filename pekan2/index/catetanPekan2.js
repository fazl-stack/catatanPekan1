
//FUNCTION

let value = function myFunction(p1, p2) {
  return p1 + p2;
}

console.log(value(15 , 70))

//ARRAY

//COMMAND ARRAY '[]'
let cars = ['BMW' , 'MAZDA' , 'PAJERO'];
console.log(cars[2])
cars[0] = true
console.log(cars[0]);

//MENGGANTIN ? MENAMBAH NAMA BARU
cars[0] = "supra"
cars[4] = 'mazed'
cars[3]='ayam';
console.log(cars);

//MENGUBAH JADI STRING
console.log(cars.toString());
console.log(cars);

//MENTOTALKAN JUMLAH
console.log(cars.length);

//MENGURUTKAN
console.log(cars.sort());

//ARRAY LOOPING
for (let i = 0; i < cars.length; i++) {
console.log(cars[i])
    
}
 
function viewArray(cars) {
    for (let i = 0; i < cars.length; i++) {
        console.log (cars[i]);
        
    }
}
console.log(viewArray(cars));

let nama_buah = ['durian , semangka , jagung']
console.log(nama_buah);
nama_buah[3] = 'jambu'
console.log(nama_buah[3])

function viewbuah (nama_buah) {
    for (let i = 0; i  < nama_buah.length; i++) {
        console.log (nama_buah[i]);
        
    }
}
console.log(nama_buah)


