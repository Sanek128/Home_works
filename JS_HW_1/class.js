/*
//---- 1 -----//
let str, num, flag, txt;

str = '«Привет»';
num = 123;
flag = true;
txt = '«true»';

console.log(typeof str);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);

//----- 2 -----//

let a1, a2, a3, a4, a5;

a1 = 5 + 3;
a2 = 5 - 3;
a3 = 5 * 3;
a4 = 5 / 3;
a5 = 5 % 3;

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);

//----- 3 -----//

let a6, a7, a8, a9, a10;

a6 = 5 % 3;
a7 = 3 % 5;
a8 = 5 + '3';
a9 = '5' - 3;
a10 = 5 + 'кг';

console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
console.log(a10);

//----- 4 -----//

let height, width,s;

height = 23;
width = 10;

s = (height + width)*2;

console.log(s);

//----- 5 -----//

let heightC, dC, v;

heightC = 10;
dC = 4;

v = 3.1415 * ((dC / 2) ** 2 ) * heightC;

console.log(v);

//---- 6 -----//

let n, m, k;

n = 3;
m = 4;

k = Math.pow(n, 2) + Math.pow(m, 2);
k = Math.sqrt(k);

console.log(k);

//---- 7 -----//

let str7 = '"Hello world"';

document.write(str7);
alert(str7);
console.log(str7);

//---- 8 -----//

alert('Спивак Александр Юрьевич \n 37 \n дача');

//---- 9 -----//

let str1, str2, str3, concatenation;

str1 = 'Кто ';
str2 = 'ты ';
str3 = 'такой?';

concatenation = str1 + str2 + str3;
document.write('<br>');
document.write(concatenation);

//------ 12 -----//

let str12 = prompt("Enter something", "ho-ho")

console.log(str12);

// ----- 13 ------//

let n1, n2, sum;

n1 = +prompt ('Введите первое число');
n2 = +prompt ('Введите второе число');

sum = n1 + n2;

alert(sum);

//----- 14 -----//

let mySurname = prompt('Введите Вашу фамилию')
let myName = prompt('Введите Ваше имя')
let myAge = prompt('Введите Ваш возраст')

alert('Добрый день ' + mySurname + ' ' + myName + ' мои поздравления Вам ' + myAge);
*/

////----- ДОП -----////

//----- 1 -----//

let num1, num2, num3, b1, b2, b3;

num1 = +prompt ('Введите первое число');
num2 = +prompt ('Введите второе число');
num3 = +prompt ('Введите третье число');

if( num1 > num2 && num1 > num3){
    b1 = num1
    } else if (num1 < num2 && num1 < num3){
        b3 = num1
    }else{
        b2 = num1
    }

if( num2 > num1 && num2 > num3){
    b1 = num2
    } else if (num2 < num1 && num2 < num3){
        b3 = num2
    }else{
        b2 = num2
    }    

if( num3 > num2 && num1 < num3){
    b1 = num3
    } else if (num3 < num2 && num1 > num3){
        b3 = num3
    }else{
        b2 = num3
    }

console.log(num1);
console.log(num2);
console.log(num3);

console.log(b1, '>', b2, '>', b3);

//----- 2 ------//

/*
Если светофор зеленый - вывести "иди".
Если светофор желтый - вывести "подожди".
Если светофор красный - вывести "стой".
Если светофор в аварийном режиме вывести "делай что хочешь"!
*/

let svetofor;
svetofor = prompt ('Введите режим светофора (зеленый, желтый, красный или авария)');

if(svetofor === 'зеленый'){
    alert('иди')
}else if(svetofor === 'желтый'){
    alert('подожди')
}else if(svetofor === 'красный'){
    alert('стой')
}else if(svetofor === 'авария'){
    alert('делай что хочешь')
}else{
    alert("Вы ввели недопустимую команду")
}

//----- 3 ------//

let svetofor3, isRoadClear;
svetofor3 = prompt ('Введите режим светофора (зеленый, желтый, красный или авария)');
isRoadClear = confirm('Мышины есть?');

/* Если светофор зеленый и машин нет - вывести "иди".
Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
Если светофор желтый и машины есть - вывести "жди".
Если светофор желтый и машин нет - вывести "все рано жди".
Если светофор красный и машин нет- вывести "стой все рано".
Если светофор красный - и машины есть вывести "стой и жди".
Если светофор в аварийном режиме вывести "делай что хочешь"!
 */

if(svetofor3 === 'зеленый' && isRoadClear === false){
    alert('иди')
}
if(svetofor3 === 'зеленый' && isRoadClear === true){
    alert('подожди пока нарушители проедут')
} 
if(svetofor3 === 'желтый' && isRoadClear === false){
    alert('жди')
}
if(svetofor3 === 'желтый' && isRoadClear === true) {
    alert('все рано жди')
} 
if(svetofor3 === 'красный' && isRoadClear === false){
    alert('стой все рано')
}
if(svetofor3 === 'красный' && isRoadClear === false){
    alert('стой и жди')
} 
if(svetofor3 === 'авария'){
    alert('делай что хочешь')
}





