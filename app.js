// 8-2 = 6

// 1 Number

var myAge = 17

// 2 string

var myNameIs = "Jakyp"

// 2 boolean

var isRainy = false

// 4 null

var myBrother = null

// 5 undefined

var myDog;

// 6 object {} = [] array

var phone = {
    model: "14 PRO",
    color: "black",
    price: 100 * 9, //900
    owner: myNameIs // Jakyp
}

// ---- CONDITIONS ---- (if, switch)
// Готовые функции (alert, prompt, confirm)

var color = "green"
// оператор (=, ==, ===, !, ??, &&, ||)
// red === red -> true
if (color === "red") {
    console.log('Stop');
}else if(color === "green") {
    //true
    console.log('Go ...');
}else if(color === "yellow"){
    //true
    console.log('WAIT ...');
}else{
    console.log('NO COLOR')
}


var  operation = '/'

if( operation === '+'){
    console.log(100 + 50);
}else if(operation === '-'){
    console.log(100 - 50);
}else if(operation === '*'){
    console.log(100 * 50);
}else if(operation === '/'){
    console.log(100 / 50);
}

var temp = 36
if(temp > 41){
    console.log('кун ысыыккыыы...')
}else if(temp > 35 && temp < 40){
    console.log('кун ысыыккыыы... абдан ысыыккыы')
}

// alert(myNameIs)

var text = prompt("атынды жаз")

if (text.toLowerCase() === "jakyp") {
    console.log('Yes I am')
}else {
    console.log('----');
}

//Weeks

var someText = "Monday"

switch(someText){
    case "Monday":
        console.log('Понедельник');
        break;
        case"6":
        case 6:
        console.log('Суббота');
        break;
        case "Sunday":
        console.log('Воскресенье');
        default:
        break;
}

if(!true){
    console.log('true---');
}else {
    console.log('false ---');
}

var userDB = {
    name: "Jakyp",
    email: 'test@gmail.com',
    password: 'qwerty00'
}

// chek email


var e = prompt()
var p = prompt()