/*
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

//var bisa hoisting
//let sama g bisa hoisting
//const g bisa diubah

//CONTOH GLOBAL SCOPE

var y = 5;
var x = 2;       
console.log( x + y);
console.log(y);

//CONTOH LOCAL SCOPE

function cars() {
    let carName = "Volvo";
    console.log(
    'mazda');
  }
  console.log(cars());

//OBJECT

//BIKIN OBJECT
let orangnya = {
    namaawal:'ayam',
    namaakhir: 'goreng',
    umur:'3 tahun',       
};

//ATAU
let ayam ={}
ayam.namaAWAL='ayam'
ayam.namaAKHIR='goreng'
ayam.Umur='3 tahun';

console.log(ayam);
console.log(orangnya);

//ATAU
const person = new Object();
person.firstName = 'amrin'
person.lastName = 'sawit'
console.log(person["firstName"]); //cara 1
console.log(person.lastName);  //cara 2

//METHOD PADA OBJECT
let car = {}
car.namaMobil = "mazda"
car.maju = function()
{
    return 'mobil maju'
}

console.log(car.maju())


//HIGHER ORDER FUNCTION
// ==> YG BEROPRASI PADA FUNCTION YNAG LAIN
//BISA SEBAGAI ARGUMEN / RETURN VALUE

function sumFunc(a , b , func){
    let result = a + b
    return func (result)

}
sumFunc(5,2, console.log)

//DESTUCTTURING

//object property alias
//menyusun ulang dan menyimpelkan sebuah object
let person = {
    firstName : 'john',
    lastName : 'doe',
    age : 50
};
let {firstName , lastName} = person;
console.log(firstName);



//DESTRUCTURING ARRAY
let fruit = ['banana' , 'orange' , 'apple' , 'mango']
let [f0 , f1 , f2 , f3] =fruit;
console.log(f2)
//tambahakan dua koma agar dari data a skip data b ke data c

//REsT PROPERTY
//menampilkan data yang tersisa
let numbers = [10,20,30,40,50,60,70]

let [a,b, ...z] = numbers

 
//MENCARII RATA2 DARI NUMBERS
//TOTAL DATA /JUMLAH DATA
function RATA2(p) {
    let count = 0;

    
    for (let i = 0; i < p.length; i++) {
        count += p[i];
        
    }
    return count / p.length
}
console.log(RATA2(numbers));
*/
//EXPRESSION FUNCTION
let sayHello = function() {
    return 'hello world'
};

//ARROW FUNCTION
let sayHello2 = () => {
    return 'hellow world'
};

//ATAU
let sayhello3 = () => 'hello world';

//JIKA ADA PARAMETER
let sayhello4 = params => 'hello world';
//kalau 1 parameter

//KALAU DUA PARAMETER
let sayhello5 = (params1 , params2 , params3) => 'hello world';

let username = new Object() 
username.nama = 'john'
username.age = 12
username.rumah = 'boulevard'

//JIKA KODE SEDIKIT ATAU SATUBARIS SAJA 
let greet = (name, age ) => `hello saya ${name} umur saya ${age}thn`
let myfunction = () {
 return 'hello world'
     //JIKA KODE BANYAK GUNAKAN KURUNG KURAWAL
}

//PERBEDAAN FUNCTION BIASA DAN ARROW

//MEMBUAT FUNCTION PAKAI CARA BIASA
//ex :

function person() {
    this.fullname = 'john',
    this.age = 20,
    this.perkenalan = function() {
        return `hello my name is ${this.fullname}
        my age is ${age} years`
    }
}
console.log(new person().perkenalan)

//ARROW FUNCTION
let person



