//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, 
//  чтобы при клике на кнопку исчезал элемент с id="text".

document.getElementById('loseDiv').onclick = () => document.getElementById('text').hidden = true;

//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let loseButtom = document.getElementById('loseBut');
loseButtom.onclick = () => loseButtom.hidden = true;

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку 
//  зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

document.forma3.button3.onclick = () => {
    if (document.forma3.text3.value < 18){
    alert('Ваш вік менше 18');
    } else{
        alert('Ваш вік задовільний');
    }
}

// Создайте меню, которое раскрывается/сворачивается при клике

let menu = document.getElementById('menu');
let ul = document.getElementById('menuUl');
ul.style.display = 'block';
menu.onclick = () => {
    if(ul.style.display === 'block'){
        ul.style.display = 'none';
    } else{
        ul.style.display = 'block';
    }
} 

//- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//  Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.


let comentList = [
    {title : 'Первое правило', body:'Никому не рассказывать о Бойцовском клубе'},
    {title : 'Второе правило', body:'Никогда никому не рассказывать о Бойцовском клубе'},
    {title : 'Третье правило', body:'В схватке участвуют только двое'},
    {title : 'Четвертое правило', body:'Не более одного поединка за один раз'},
    {title : 'Пятое правило', body:'Бойцы сражаются без обуви и голые по пояс'},
    {title : 'Шестое правило', body:'Поединок продолжается столько, сколько потребуется'},
    {title : 'Седьмое правило', body:'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен'},
    {title : 'Восьмое и последнее правило', body:'Новичок обязан принять бой'}
]

let coments = document.createElement('div');
coments.innerText = '5-------------------------------';

for (let i = 0; i < comentList.length; i++) {
    
    let div = document.createElement('div');
    let title = document.createElement('h2');
    let body = document.createElement('p');
    let but = document.createElement('button');

    title.innerText = comentList[i].title;
    body.innerText = comentList[i].body;
    but.innerText = 'Приховати / показати коментар';

    body.style.display = 'block'
    but.onclick = () => {
        if(body.style.display === 'block'){
            body.style.display = 'none';
        } else{
            body.style.display = 'block';
        }
    }

    div.appendChild(title);
    div.appendChild(body);
    div.appendChild(but);
    coments.appendChild(div);
    document.body.appendChild(coments);
}

//- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//  Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//  Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let but6 = document.getElementById('but6');

but6.onclick =() => {
    console.log(document.forms.forma61.text61.value);
    console.log(document.forms.forma61.check61.checked);
    console.log(document.forms.forma62.text62.value);
    console.log(document.forms.forma62.radio62.checked);
}

//- Створити функцію, яка генерує таблицю.
//  Перший аргумент визначає кількість строк.
//  Другий параметр визначає кліькіть ячеєк в кожній строці.
//  Третій параметр визначає елемент в який потрібно таблицю додати.

function creteTable(row, col, element){
    let table = document.createElement('table');
    for (let i = 0; i < row; i++) {
        let tr = document.createElement('tr')
        for (let j = 0; j < col; j++) {
            let td = document.createElement('td');
            td.innerText = "Ячейка " + i + ":" + j;
            tr.appendChild(td)
        }
        table.appendChild(tr);
    }
    element.appendChild(table);
}

let table7 = document.createElement('table');
document.body.appendChild(table7);
table7.innerText = '7--------------------------';

creteTable(5, 7, table7);

//- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//  При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

function creteTable1(row, col, element, text){
    let table = document.createElement('table');
    for (let i = 0; i < row; i++) {
        let tr = document.createElement('tr')
        for (let j = 0; j < col; j++) {
            let td = document.createElement('td');
            td.innerText = text;
            tr.appendChild(td)
        }
        table.appendChild(tr);
    }
    element.appendChild(table);
}
    
let butTable = document.getElementById('table');

butTable.onclick = () =>{
    creteTable1 (document.forms.createTable.rowTable.value, document.forms.createTable.colTable.value, table8, document.forms.createTable.textTable.value);
}

let table8 = document.createElement('table');
document.body.appendChild(table8);
table8.innerText = '8--------------------------';

//- Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

let img = ['img/T1.jpg','img/T2.jpg','img/T3.jpg','img/T4.jpg','img/T5.jpg','img/T6.jpg'];

let karusel = document.createElement('div');
karusel.innerText = '9--------------------------\n';
let image = document.createElement('img');
let next = document.createElement('button');
let prev = document.createElement('button');

karusel.appendChild(prev);
karusel.appendChild(image);
karusel.appendChild(next);
document.body.appendChild(karusel)
prev.innerText = 'Prev';
next.innerText = 'Next';

let k = 0;
image.src = img[k];

prev.onclick = () =>{
    if ((k -1) < 0){
        k = img.length - 1;
    } else {
        k--;
    }
    image.src = img[k];
}
next.onclick = () =>{
    if((k + 1) > img.length - 1){
        k = 0;
    }else{
        k++;
    }
    image.src = img[k];
}

// - Сворити масив не цензцрних слів.
//   Сворити інпут текстового типу.
//   Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//   Кинути алерт з попередженням у випадку якщо містить.
//   Перевірку робити при натисканні на кнопку

let badWords = ['Mat1', 'mat2', 'Mat3', 'mat4', 'Mat5', 'mat6', 'Mat7', 'mat8', 'Mat9'];

document.forms.mat.butMat.onclick = () =>{
    let text = document.forms.mat.matText.value.split(' ').filter(Boolean);
    let k = false;
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < badWords.length; j++) {
            if (text[i].toLocaleLowerCase() === badWords[j].toLocaleLowerCase()){
                k = true;
            }
        }
    }
    if (k === true){
        alert('Ви використали матюки в своєму реченні, перефразуйте');
    }
}

// -- взять массив пользователей
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. 
// Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];

let users = document.getElementById('usersWithAddress');
//users.innerText=JSON.stringify(usersWithAddress);
users.appendChild(perebor(usersWithAddress));
let statusFalse = document.forms.usersWithAddress.statusFalse;
let age29Plus = document.forms.usersWithAddress.age29Plus;
let townKyiv = document.forms.usersWithAddress.townKyiv;

function perebor(mas){
    let div = document.createElement ('div');
    mas.forEach(element => {
        let div1 = document.createElement ('div');
        div1.innerText = JSON.stringify(element);
        div.appendChild(div1);
    });
    return div;
}

//let usersArr = JSON.parse(JSON.stringify(usersWithAddress));

statusFalse.onclick = () =>{
    let usersArr = JSON.parse(JSON.stringify(usersWithAddress));
    if (statusFalse.checked){
    usersArr = usersArr.filter(value => !value.status);
    } 
    if (age29Plus.checked){
    usersArr = usersArr.filter(value => value.age >= 29);
    } 
    if (townKyiv.checked){
    usersArr = usersArr.filter(value => value.address.city === 'Kyiv');
    } 
    users.innerText = '';
    users.appendChild(perebor(usersArr));
}

age29Plus.onclick = () =>{
    let usersArr = JSON.parse(JSON.stringify(usersWithAddress));
    if (statusFalse.checked){
    usersArr = usersArr.filter(value => !value.status);
    }
    if (age29Plus.checked){
    usersArr = usersArr.filter(value => value.age >= 29);
    }
    if (townKyiv.checked){
    usersArr = usersArr.filter(value => value.address.city === 'Kyiv');
    }
    users.innerText = '';
    users.appendChild(perebor(usersArr));
}

townKyiv.onclick = () =>{
    let usersArr = JSON.parse(JSON.stringify(usersWithAddress));
    if (statusFalse.checked){
    usersArr = usersArr.filter(value => !value.status);
    }
    if (age29Plus.checked){
    usersArr = usersArr.filter(value => value.age >= 29);
    }
    if (townKyiv.checked){
    usersArr = usersArr.filter(value => value.address.city === 'Kyiv');
    }
    users.innerText = '';
    users.appendChild(perebor(usersArr));
}
