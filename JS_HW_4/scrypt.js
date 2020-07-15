// - створити функцію яка виводить масив

function massivOut(mas) {
    // for (const m of mas) {
    //     console.log(m);
    // }
    console.log(mas);

}
let masTest = [12, 13, 85, null, false, 'Igor'];
massivOut(masTest);

// - створити функцію яка заповнює масив рандомними числами та виводить його. 
//   Для виведення використати попвередню функцію.

function massivRandom(mR, kilkistElementiv) {
    for (i = 0; i < kilkistElementiv; i ++){
        mR[i] = Math.floor(Math.random() * 300);
        //console.log(mR[i])
    }
}
let masR = [];
massivRandom(masR, 7);
massivOut(masR);

// - створити функцію яка приймає три числа та виводить та повертає найменьше.

function threeNumbersMin (a, b, c){
    console.log(a, b, c);
    let min;
    if (a < b && a < c) {
        //console.log('Найменше число -> ' + a);
        min = a;
    } else {
        if (b < a && b < c) {
            //console.log('Найменше число -> ' + b);
            min = b;
        } else {
            //console.log('Найменше число -> ' + c);
            min = c;
        }
    }
    console.log('Найменше число -> ' + min);
    return min;

}
let min = threeNumbersMin(5, 15, 25);
console.log(min);

// - створити функцію яка приймає три числа та виводить та повертає найбільше.

function threeNumbersMax (a, b, c){
    console.log(a, b, c);
    //console.log(arguments);
    let max;
    if (a > b && a > c) {
        max = a;
    } else {
        if (b > a && b > c) {
            max = b;
        } else {
            max = c;
        }
    }
    console.log('Найбільше число -> ' + max);
    return max;

}
let max = threeNumbersMax(5, 15, 25);
console.log(max);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

function numbersMinMax(){
    let max = arguments[0];
    let min = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    console.log('Найбільше число -> ' + max);
    return min;
}
let minMax = numbersMinMax(12, 3, -2, 0, 8, 101, -5, 55);
console.log(minMax);

// - створити функцію яка виводить масив
//  massivOut  tast 1

// - створити функцію яка повертає найбільше число з масиву

function numbersMax(){
    let max = arguments[0]
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    console.log('Найбільше число -> ' + max);
    return max;
}
let nMax = numbersMax(12, 55, 14, 78, -52, -41, -3, 0, 25, 35, -7);
console.log(nMax);

// - створити функцію яка повертає найменьше число з масиву

function numbersMin(){
    let min = arguments[0]
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    console.log('Найменше число -> ' + min);
    return min;
}
let nMin = numbersMin(12, 55, 14, 78, -52, -41, -3, 0, 25, 35, -7);
console.log(nMin);

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

function numbersSum(){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];        
    }
    console.log('Сума чисел в масиві -> ' + sum);
    return sum;
}
let nSum = numbersSum(0, 2, 33, 5, 78, -6, -874, 654, 854, -235, 17, 25);
console.log(nSum);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function numbersSrAr(){
    let sum = 0;
    let srAr;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];        
    }
    srAr = sum / arguments.length;
    console.log('Середнє арифметичне елементів масива -> ' + srAr);
    return srAr;
}
let srAr = numbersSrAr(12, 22, 32, 45, 48, 47, -25, -33, 155, 853, -687, 456);
console.log(srAr);

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

function numbersKilkist(numMus){
    console.log('Кількість обєктів в масиві -> ' + numMus.length);
    return numMus.length;
}
let kilk = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
},   {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
console.log(numbersKilkist(kilk));

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

function numbersZagKilk(kilkmas){
    let kilkist = 0;
    for (const m of kilkmas) {
        for (const mm in m) {
        kilkist++;
        }
    }
    console.log('Кількість полів в масиві -> ' + kilkist);
    return kilkist;
}
console.log(numbersZagKilk(kilk));

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає 
//   новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

function massSum(mass1, mass2){
    let masS = [];
    let x;
    if (mass1.length > mass2.length) {
        x = mass1.length;
    } else {
        x = mass2.length
    }

    for (let i = 0; i < x; i++) {
        masS.push((mass1[i] || 0)+ (mass2[i] || 0));
    }
    return masS;
}
let mas = massSum([1, 2, 3, 4, 5, 6, 7], [2, 3, 4, 5, 6, 7])
console.log(mas);

//- *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

function changeI(mas, i){
    console.log(mas);
    let x = mas[i];
    mas[i] = mas[i + 1];
    mas[i + 1] = x;
    console.log(mas);
}
changeI([1, 2, 3, 5, 8, 99, 101, 555], 6);

//- *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. 
//      Зберігаючи при цьому порядок не нульових значень.
//      Двожина масиву від 2 до 100

function move(mov){

    if (mov.length > 2 && mov.length < 100) {
        for (let i = 0; i < mov.length; i++) {
            if (mov[i] === 0) {
                mov.splice(i, 1);
                mov.push(0);
            }
        }
    } 
}
let k = [1, 0, 2, 3, 0, 4, 5, 0, 6];
console.log(k);
move(k);
console.log(k);

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

function addDiv(){
    let div = document.createElement('div');
    div.innerText = '"Hello owu"';
    document.body.appendChild(div);
}
addDiv();

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

function addElmentPlusText(element, text){
    let elem = document.createElement(`${element}`);
    elem.innerText = `${text}`;
    document.body.appendChild(elem);
}
addElmentPlusText('p', 'Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який 
//   потрібно додати список цих автомобілів.
//   Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. 
//   Всі властивості авто в обному блоці

function addAuto(masAuto, element){
    let elem = document.createElement(`${element}`);
    for (let i = 0; i < masAuto.length; i++) {
        let div = document.createElement('div');
        div.innerText = JSON.stringify(masAuto[i]);
        elem.appendChild(div);        
    }
    document.body.appendChild(elem);
}

let cars = [
{
    Model: 'KIA',
    Year: 203,
    Power: 90,
    Color: 'Grey',
    Driver: {
        DriverName: 'Varvara',
        DriverAge: 35,
        DriverGender: 'Female',
        Experience: 17
    }
}, 
{
    Model: 'Volkswagen',
    Year: 2017,
    Power: 160,
    Color: 'Red',
    Driver: {
        DriverName: 'Oleg',
        DriverAge: 52,
        DriverGender: 'Male',
        Experience: 34
    }
},
{
    Model: 'Lada',
    Year: 2007,
    Power: 80,
    Color: 'Silver',
    Driver: {
        DriverName: 'Kolia',
        DriverAge: 30,
        DriverGender: 'Male',
        Experience: 7
    }
},
{
    Model: 'Acura',
    Year: 2017,
    Power: 200,
    Color: 'Black',
    Driver: {
        DriverName: 'Egor',
        DriverAge: 37,
        DriverGender: 'Male',
        Experience: 14
    }
}]
addAuto(cars, 'div');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

function addAutoNew(masAuto, element){
    let elem = document.createElement(`${element}`);
    

    for (let i = 0; i < masAuto.length; i++) {
        let modelDiv = document.createElement('div');
        let yearDiv = document.createElement('div');
        let powerDiv = document.createElement('div');
        let colorDiv = document.createElement('div');
        let driverDiv = document.createElement('div');
        let div = document.createElement('div');

        modelDiv.innerText = masAuto[i].Model;
        yearDiv.innerText = masAuto[i].Year;
        powerDiv.innerText = masAuto[i].Power;
        colorDiv.innerText = masAuto[i].Color;
        driverDiv.innerText = JSON.stringify(masAuto[i].Driver);

        div.appendChild(modelDiv);        
        div.appendChild(yearDiv);        
        div.appendChild(powerDiv);        
        div.appendChild(colorDiv);        
        div.appendChild(driverDiv);       
        elem.appendChild(div); 
    }
    document.body.appendChild(elem);
}
addAutoNew(cars, 'div');

//  (на основі минулого ДЗ)
//  **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто 
//  з відповідними "id" та "user_id", та повертає масив цих з'єднаних об'єктів.

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false}, 
    {id: 2, name: 'petya', age: 30, status: true}, 
    {id: 3, name: 'kolya', age: 29, status: true}, 
    {id: 4, name: 'olya', age: 28, status: false},
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'}, 
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, 
    {user_id: 2, country: 'Poland', city: 'Krakow'}, 
    {user_id: 4, country: 'USA', city: 'Miami'},
];

function userCiti(users, citis){
    let usersCitis = [];
    for (let i = 0; i < users.length; i++) {
        usersCitis[i] = users[i];
        for (let j = 0; j < citis.length; j++) {
            if (users[i].id === citis[j].user_id) {
                usersCitis[i] = Object.assign(users[i], citis[j]);
            }
        }
    }
    return usersCitis;
}
let s = userCiti(usersWithId, citiesWithId);
console.log(s);

//***- беремо завдання з правилами з укроку №3 :
//     Та робимо це функцією.При цьому правила отримувати через аргумент.
//---------------------------------------------//
//- є сторінка rules.html. Контентом сторінки є заголовки та параграфи. 
//Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), 
//який буде змістом того, що знаходиться на сторінці.
//Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//---------------------------------------------------//

// Зроблено прямо в файлі rules.html   /////

