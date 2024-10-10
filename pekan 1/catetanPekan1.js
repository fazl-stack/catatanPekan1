//Operator Logika 

// (||)
//hasilnya true selagi ada true

console.log(true || false || false);

// (&&)
//hasilnya false selagi ada false

console.log(true&&true);
console.log(true&&false);
console.log(false&&false);

//ternary
//membandingkan sebuah nilai


var ayam = 12;
var bebek = 20;
console.log(ayam <= bebek ? true : false);
var pulang = true;
console.log(pulang ? true : false)

//CONTROL FLOW

//if else
//membuat pengkondisian pada sebuah program

var namaSayur = prompt('siapa lu?');

 if (namaSayur == 'kopi') {
    alert('gua tau lu ');
 } else if(namaSayur == 'ayam') {
    alert('sokap lu');
} else {
    alert('hai '+ namaSayur);
 };

//Simplified Calculator

let lagi = true
 
   while(lagi)
   {
     
 let nilai1 =parseInt(prompt('masukin angkanye'));
 let operator =prompt('masukin KABATAKU??');
 let nilai2 =parseInt(prompt('masukin angkanye'));
    if(operator == '+') {
    alert(nilai1 + nilai2)
 } else if(operator == '-') {
    alert(nilai1 - nilai2)
 } else if(operator == '*') {
    alert(nilai1 * nilai2)}
   else if(operator == '/') {
    alert(nilai1 / nilai2)}

    lagi = confirm('mau lagi??')
}   
 alert('thanks');

   while(lagi) { 
   
var username = prompt ('masukkan nama anda');

lagi = confirm('ga ganti ' + username + '??')
  
} alert('ok next');

   
//SWITCH
   var namaBinatang = prompt('apa yang anda mau?');
switch (namaBinatang) {
   case('kucing'):
      alert('meowww')
      break;
      
   case('sapi'):
      alert('mooooo')
      break;

   case('anjing'):
      alert('itumah elu')
      break;

   default:
      alert('cari tau sendiri lah jirr')
      break;   
}

//Looping
//kondisi dimana kode dijalankan secara kontinu


//FOR
var x  = 1
var count = 10
 for(x; x <= count; x++) {
   document.write('mang ea??')
   document.write('<br>')
 }

//FOR IN
//FOR EACH
//WHILE
//DO WHILE
