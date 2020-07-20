//- создать массив с 20 числами.

let numbers = [21, 54, 30, -58, -5, 71, 57, 111, 0, 4, 20, -3, -7, -88, 52, 14, 35, 43, 15, 55];
console.log(numbers);

// -- при помощи метода sort и колбека  отсортировать массив.

let sortUp = numbers.sort((a, b) => a - b);
console.log(sortUp);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

let sortDown = numbers.sort((a, b) => b - a);
console.log(sortDown);

// -- при помощи filter получить числа кратные 3

let sortKrat3 = numbers.filter(value => value % 3 === 0)
console.log(sortKrat3);

// -- при помощи filter получить числа кратные 10

let sortKrat10 = numbers.filter(value => value % 10 === 0)
console.log(sortKrat10);

// -- перебрать (проитерировать) массив при помощи foreach()

numbers.forEach(value => console.log(value));

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

let numbersX3 = numbers.map(value => value * 3);
console.log(numbersX3);

// /-----------------------------------------------------------------/

// - создать массив со словами на 15-20 элементов.

let words = ['A', 'Bee', 'tree', 'box', 'Igor', 'World', 'Apollo', 'space', 'forest', 'Summer', 'notebook', 'table', 'Elena', 'Kostik', 'Dollar', 'dol', 'new', 'smile'];
console.log(words);

// -- отсортировать его по алфавиту в восходящем порядке.

let wordsUp = words.sort((a, b) => {
    if (a.toLocaleLowerCase() > b.toLocaleLowerCase()){
        return 1
    }
    return -1
});
console.log(wordsUp);

// -- отсортировать его по алфавиту  в нисходящем порядке.

let wordsDown = words.sort((a, b) => {
    if (a.toLocaleLowerCase() > b.toLocaleLowerCase){
        return -1
    }
    return 1
});
console.log(wordsDown);

// -- отфильтровать слова длиной менее 4х символов

let words4simv = words.filter(value => value.length <= 4);
console.log(words4simv);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" 
//    в конце

let words1 = words.map(value => value + '!');
console.log(words1);

// /--------------------------------------------------------------------/

// Все робити через функції масивів (foreach, map ...тд)

let users = [ 
    {name: 'vasya', age: 31, status: false}, 
    {name: 'petya', age: 30, status: true}, 
    {name: 'kolya', age: 29, status: true}, 
    {name: 'olya', age: 28, status: false}, 
    {name: 'max', age: 30, status: true}, 
    {name: 'anya', age: 31, status: false}, 
    {name: 'oleg', age: 28, status: false}, 
    {name: 'andrey', age: 29, status: true}, 
    {name: 'masha', age: 30, status: true}, 
    {name: 'olya', age: 31, status: false}, 
    {name: 'max', age: 31, status: true} 
];
console.log(users);

// - відсортувати його за  віком (зростання , а потім окремо спадання)

let usersAgeUp  = users.sort((a, b) => a.age - b.age);
console.log(usersAgeUp);

let usersAgeDown  = users.sort((a, b) => b.age - a.age);
console.log(usersAgeDown);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

let usersWordsUp = users.sort((a, b) => a.name.length - b.name.length);
console.log(usersWordsUp);

let usersWordsDown = users.sort((a, b) => b.name.length - a.name.length);
console.log(usersWordsDown);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор 
//   (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив 
//   (первинний масив залишиться без змін)

let usersId = users.map((value, id) => {
    value.id = id + 1;
    return value; 
});
console.log(usersId);

// - відсортувати його за індентифікатором

let usersSortId = users.sort((a, b) => b.id - a.id);
console.log(usersSortId);

// -- наисать функцию калькулятора с 2мя числами и колбеком

function calculator2(x, y, operator){
    if (operator === '+'){
        console.log(x + y);
    }
    if (operator === '-'){
        console.log(x - y);
    }
    if (operator === '*'){
        console.log(x * y);
    }
    if (operator === '/'){
        console.log(x / y);
    }
}
calculator2(3, 6, '+');
calculator2(3, 6, '-');
calculator2(3, 6, '*');
calculator2(3, 6, '/');

// -- наисать функцию калькулятора с 3мя числами и колбеком

function calculator3(x, y, z, operator1, operator2){
    if (operator1 === '+'){
        if (operator2 === '+'){
            console.log(x + y + z);
        }
        if (operator2 === '-'){
            console.log(x + y - z);
        }
        if (operator2 === '*'){
            console.log(x + y * z);
        }
        if (operator2 === '/'){
            console.log(x + y / z);
        }
    }
    if (operator1 === '-'){
        if (operator2 === '+'){
            console.log(x - y + z);
        }
        if (operator2 === '-'){
            console.log(x - y - z);
        }
        if (operator2 === '*'){
            console.log(x - y * z);
        }
        if (operator2 === '/'){
            console.log(x - y / z);
        }
    }
    if (operator1 === '*'){
        if (operator2 === '+'){
            console.log(x * y + z);
        }
        if (operator2 === '-'){
            console.log(x * y - z);
        }
        if (operator2 === '*'){
            console.log(x * y * z);
        }
        if (operator2 === '/'){
            console.log(x * y / z);
        }
    }
    if (operator1 === '/'){
        if (operator2 === '+'){
            console.log(x / y + z);
        }
        if (operator2 === '-'){
            console.log(x / y - z);
        }
        if (operator2 === '*'){
            console.log(x / y * z);
        }
        if (operator2 === '/'){
            console.log(x / y / z);
        }
    }
}
calculator3(9, 6, 3, '+', '*');
calculator3(9, 6, 3, '*', '/');

///////////////////   CLASS   //////////////////////

let cars = [ 
    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, 
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, 
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, 
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, 
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, 
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, 
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, 
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, 
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, 
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, 
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, 
    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, 
    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} 
];
console.log(cars);
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів

let carsVolume = cars.filter(value => value.volume > 3);
console.log(carsVolume);

// - двигун = 2л

let carsVolume2 = cars.filter(value => value.volume === 2);
console.log(carsVolume2);

// - виробник мерс

let carsMercedes = cars.filter(value => value.producer === 'mercedes')
console.log(carsMercedes);

// - двигун більше 3х літрів + виробник мерседес

let carsMercedes3 = cars.filter(value => value.producer === 'mercedes' && value.volume > 3)
console.log(carsMercedes3);

// - двигун більше 3х літрів + виробник субару

let carsSubaru3 = cars.filter(value => value.producer === 'subaru' && value.volume > 3)
console.log(carsSubaru3);

// - сили більше ніж 300

let carsPower = cars.filter(value => value.power > 300)
console.log(carsPower);

// - сили більше ніж 300 + виробник субару

let carsPowerSubaru = cars.filter(value => value.producer === 'subaru' && value.power > 300)
console.log(carsPowerSubaru);

// - мотор серіі ej

let carsEngineEj = cars.filter(value => value.engine.startsWith('ej'));
console.log(carsEngineEj);

// - сили більше ніж 300 + виробник субару + мотор серіі ej

let carsPowerSubaruEj = cars.filter(value => value.producer === 'subaru' && value.power > 300 && value.engine.startsWith('ej'))
console.log(carsPowerSubaruEj);

// - двигун меньше 3х літрів + виробник мерседес

let carsMercedesMenshe3 = cars.filter(value => value.producer === 'mercedes' && value.volume < 3)
console.log(carsMercedesMenshe3);

// - двигун більше 2л + сили більше 250

let carsVolume2Power250 = cars.filter(value => value.volume > 2 && value.power > 250)
console.log(carsVolume2Power250);

// - сили більше 250  + виробник бмв

let carsBmw250 = cars.filter(value => value.producer === 'bmw' && value.power > 250);
console.log(carsBmw250);

let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, 
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, 
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, 
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, 
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, 
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, 
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, 
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, 
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}
];
console.log(usersWithAddress);

// -- отсортировать его по id пользователей

let usersAdresUp = usersWithAddress.sort((x, y) => x.id - y.id)
console.log(usersAdresUp);

// -- отсортировать его по id пользователей в обратном опрядке

let usersAdresDown = usersWithAddress.sort((x, y) => y.id - x.id)
console.log(usersAdresDown);

// -- отсортировать его по возрасту пользователей

let usersWAgeUp = usersWithAddress.sort((x, y) => x.age - y.age)
console.log(usersWAgeUp);

// -- отсортировать его по возрасту пользователей в обратном порядке

let usersWAgeDown = usersWithAddress.sort((x, y) => y.age - x.age)
console.log(usersWAgeDown);

// -- отсортировать его по имени пользователей

let usersNameUp = usersWithAddress.sort((x, y) => {
    if (x.name > y.name){
        return 1
    }
    return -1
    })
console.log(usersNameUp);

// -- отсортировать его по имени пользователей в обратном порядке

let usersNameDown = usersWithAddress.sort((x, y) => {
    if (x.name > y.name){
        return -1
    }
    return 1
    })
console.log(usersNameDown);

// -- отсортировать его по названию улицы  в алфавитном порядке

let usersStreetUp = usersWithAddress.sort((x, y) => {
    if (x.address.street > y.address.street){
        return 1
    }
    return -1
    })
console.log(usersStreetUp);

// -- отсортировать его по номеру дома по возрастанию

let usersHomeUp = usersWithAddress.sort((x, y) => x.address.number - y.address.number)
console.log(usersHomeUp);

// -- отфильтровать (оставить) тех кто младше 30

let usersAge30 = usersWithAddress.filter(value => value.age < 30)
console.log(usersAge30);

// -- отфильтровать (оставить) тех у кого отрицательный статус

let usersStatusFalse = usersWithAddress.filter(value => value.status === false);
console.log(usersStatusFalse);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет

let usersStatusFalseAge30 = usersWithAddress.filter(value => value.status === false && value.age < 30);
console.log(usersStatusFalseAge30);

// -- отфильтровать (оставить) тех у кого номер дома четный

let usersHomeChetniy = usersWithAddress.filter(value => value.address.number % 2 === 0)
console.log(usersHomeChetniy);

/////////////////////// DOP ///////////////////////

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.

let car1 = {model: "subaru_wrx", year: 2010, price: 35000, power: 400, driver: {name: 'vasya', age: 31, driverAge: 10}};
let car2 = {model: "subaru_legacy", year: 2007, price: 25000, power: 250, driver: {name: 'Ivan', age: 28, driverAge: 5}};
let car3 = {model: "subaru_tribeca", year: 2011, price: 27000, power: 300, driver: {name: 'Illia', age: 44, driverAge: 20}};
let car4 = {model: "subaru_leone", year: 1998, price: 19000, power: 140, driver: {name: 'Olga', age: 19, driverAge: 1}};
let car5 = {model: "subaru_impreza", year: 2014, price: 21000, power: 200, driver: {name: 'Tatiana', age: 35, driverAge: 15}};
let car6 = {model: "subaru_outback", year: 2014, price: 33000, power: 165, driver: {name: 'Viktor', age: 24, driverAge: 5}};
let car7 = {model: "bmw_115", year: 2013, price: 22000, power: 120, driver: {name: 'Elena', age: 22, driverAge: 3}};
let car8 = {model: "bmw_315", year: 2010, price: 15000, power: 120, driver: {name: 'Oleg', age: 52, driverAge: 30}};
let car9 = {model: "bmw_650", year: 2009, price: 11000, power: 350, driver: {name: 'Egor', age: 26, driverAge: 4}};
let car10 = {model: "bmw_320", year: 2012, price: 16000, power: 180, driver: {name: 'Nikita', age: 29, driverAge: 7}};

// Для початку вкладіть всі наші створені автомобілі в масив cars.

let carsDop = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];
console.log(carsDop);

// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).

for (let i = 0; i < carsDop.length / 2; i++) {
    carsDop[i].power *= 1.1; 
    //Math.round(carsDop[i].power);
}

// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
for (let i = 0; i < carsDop.length / 2; i++) {
    carsDop[i].driver.name = 'New driver ' + (i + 1);
    carsDop[i].driver.age += 5;
    carsDop[i].driver.driverAge += 4;
}

// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%

// for (let i = 1; i < carsDop.length; i + 2) {
//     carsDop[i].power *= 1.1; 
//     carsDop[i].price *= 1.05;
// }

// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, 
// то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.

for (let i = 0; i < carsDop.length ; i++) {
    if (carsDop[i].driver.driverAge < 5 &&carsDop[i].driver.age > 5){
        carsDop[i].driver.driverAge += 1;
        console.log (carsDop[i].driver.name + ' пройшов курси підвищення кваліфікації');
    }
}

// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

let sum = 0;
for (let i = 0; i < carsDop.length ; i++) {
    sum = sum + carsDop[i].price;
}
console.log('Для придбання всіх цих авто необхідно ' + sum + '$');


