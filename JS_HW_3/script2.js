/*
1- создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. 
(Т.е поле name  должно присутствовать только 1 раз в одном объекте )
2- создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать 
массив и внутренний объект. Опишите что угодно, машину, картину, болт... 
Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
 */

let dog1 = {Breed: 'Pitbul', Gender: 'Male', Nickname: 'Bul', Color: 'Black'};
let human1 = {Name: 'Vasia', Age: '33', Growth: 180, Weight: 82};
let car1 = {Brand: 'Ford', Model: 'Focus', Year: 2013, Engine: '1.0 EcoBoost'};
let flat1 ={Area: 80, NuberOfRums: 3, Floor: 2, Furniture: 'Yes'};
let book1 = {Book: 'Garry Poter',Genre: 'Fantastic', Pages: 369, Price: '20$'};

let town = {
    Nazvanie: 'Kiev',
    Stolica: 'Yes',
    Nacelenie: 2888400,
    Rayoni: ['Darnica', 'Poznyaki', 'Troeschina'],
    Metro: {
        M1: 'Akademmisto - Lisova',
        M2: 'Teremki - Geroiv Dnipra',
        M3: 'Sirec - Chervoniy hutor',
    }
}
let gitara = {
    Firma: 'Yamaha',
    KolichestvoStrun: 6,
    MaterialStrun: 'Serebro',
    Material: ['Lipa', 'Olha'],
    Proizvedena: {
        Strana: 'Kitai',
        Gorod: 'Hong Kong'
    }

}
let naborNojey = {
    KolichestvoNojey: 3,
    NazvaniyaNojey: ['Shef', 'For meat', 'For vegetable'],
    Zotochka: 'Svedeni v 0',
    Garantiya: '1 year',
    Materiali: {
        Lezvie: 'Steel',
        Ruchka: 'Dub'
    }
}
let stadion = {
    Name: 'Olimpiko',
    Vmestitelnost: 72700,
    Udobstva: ['Parkovka', 'VIP zona'],
    HomeKomanda: 'Poma',
    DopInfo: {
        Mestopolojenie: 'Rome, Italy',
        Postroen: 1928,
        Otkrit: 1937
    }
}
let human = {
    Sozdatel: 'God',
    Proizoshel: 'Ot obeziani',
    Tip: 'Teplokrovnie',
    VariantiPeremescheniya: ['Peshkom', 'Beg', 'Polzkom', 'Plivet'],
    Osobennosti: {
        Ruk: 2,
        Nog: 2,
        Golova: 1
    }
}

//3- При помощи for in вывести все ключи всех объектов из задания 1 и 2

for (const key in dog1) {
    console.log(key);
}
for (const key in human1) {
    console.log(key);
}
for (const key in car1) {
    console.log(key);
}
for (const key in flat1) {
    console.log(key);
}
for (const key in book1) {
    console.log(key);
}
for (const key in town) {
    console.log(key);
}
for (const key in gitara) {
    console.log(key);
}
for (const key in naborNojey) {
    console.log(key);
}
for (const key in stadion) {
    console.log(key);
}
for (const key in human) {
    console.log(key);
}

//4- При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

for (const key in dog1) {
    console.log(dog1[key]);
}
for (const key in human1) {
    console.log(human1[key]);
}
for (const key in car1) {
    console.log(car1[key]);
}
for (const key in flat1) {
    console.log(flat1[key]);
}
for (const key in book1) {
    console.log(book1[key]);
}
for (const key in town) {
    console.log(town[key]);
}
for (const key in gitara) {
    console.log(gitara[key]);
}
for (const key in naborNojey) {
    console.log(naborNojey[key]);
}
for (const key in stadion) {
    console.log(stadion[key]);
}
for (const key in human) {
    console.log(human[key]);
}

//5- Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. 
//(Значаения полей могу быть выдуманными)

let cars = [];
    cars[0] = {
        Model: 'Tesla',
        Year: 2015,
        Power: 200,
        Color: 'MetalicBlack'
    }
    cars[1] = {
        Model: 'Ford',
        Year: 2013,
        Power: 100,
        Color: 'Red'
    }
    cars.push ({
        Model: 'Dodge',
        Year: 2017,
        Power: 220,
        Color: 'Red'
    })
    cars.push ({
        Model: 'Nissan',
        Year: 2016,
        Power: 250,
        Color: 'Blue'
    })
    cars.push ({
        Model: 'Mersedes',
        Year: 2020,
        Power: 300,
        Color: 'Silver'
    })
    cars.push ({
        Model: 'Mustang',
        Year: 2011,
        Power: 240,
        Color: 'Yellow'
    })
    cars.push ({
        Model: 'Acura',
        Year: 2017,
        Power: 200,
        Color: 'Black'
    })
    cars.push ({
        Model: 'Lada',
        Year: 2007,
        Power: 80,
        Color: 'Silver'
    })
    cars.push ({
        Model: 'Volkswagen',
        Year: 2017,
        Power: 160,
        Color: 'Red'
    })
    cars.push ({
        Model: 'KIA',
        Year: 203,
        Power: 90,
        Color: 'Grey'
    })

console.log(cars);

//6- Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. 
//(Значаения полей могу быть выдуманными)

let cities = [];

cities.push ({
    Name: 'Kiev',
    Population: 2800000,
    Country: 'Ukraine',
    Region: 'Kievskaya obl'
})
cities.push ({
    Name: 'Town 1',
    Population: 1565151,
    Country: 'Country 1',
    Region: 'Region 1'
})
cities.push ({
    Name: 'Town 2',
    Population: 2569874,
    Country: 'Country 2',
    Region: 'Region 2'
})
cities.push ({
    Name: 'Town 3',
    Population: 221558445,
    Country: 'Country 3',
    Region: 'Region 3'
})
cities.push ({
    Name: 'Town 4',
    Population: 24425413,
    Country: 'Country 4',
    Region: 'Region 4'
})
cities.push ({
    Name: 'Town 5',
    Population: 45427755,
    Country: 'Country 5',
    Region: 'Region 5'
})
cities.push ({
    Name: 'Town 6',
    Population: 668686868,
    Country: 'Country 6',
    Region: 'Region 6'
})
cities.push ({
    Name: 'Town 7',
    Population: 777575557,
    Country: 'Country 7',
    Region: 'Region 7'
})
cities.push ({
    Name: 'Town 8',
    Population: 35353543,
    Country: 'Country 8',
    Region: 'Region 8'
})
cities.push ({
    Name: 'Town 9',
    Population: 23555886,
    Country: 'Country 9',
    Region: 'Region 9'
})
console.log(cities);

//7- Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, 
//водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

let carss = [];
carss.push ({
    Model: 'Tesla',
    Year: 2015,
    Power: 200,
    Color: 'MetalicBlack',
    Driver: {
        DriverName: 'Vasia',
        DriverAge: 43,
        DriverGender: 'Male',
        Experience: 23
    }
})
carss.push ({
    Model: 'Ford',
    Year: 2013,
    Power: 100,
    Color: 'Red',
    Driver: {
        DriverName: 'Katia',
        DriverAge: 23,
        DriverGender: 'Female',
        Experience: 5
    }
})
carss.push ({
    Model: 'Dodge',
    Year: 2017,
    Power: 220,
    Color: 'Red',
    Driver: {
        DriverName: 'Petya',
        DriverAge: 32,
        DriverGender: 'Male',
        Experience: 10
    }
})
carss.push ({
    Model: 'Nissan',
    Year: 2016,
    Power: 250,
    Color: 'Blue',
    Driver: {
        DriverName: 'Igor',
        DriverAge: 19,
        DriverGender: 'Male',
        Experience: 1
    }
})
carss.push ({
    Model: 'Mersedes',
    Year: 2020,
    Power: 300,
    Color: 'Silver',
    Driver: {
        DriverName: 'Irina',
        DriverAge: 25,
        DriverGender: 'Female',
        Experience: 5
    }
})
carss.push ({
    Model: 'Mustang',
    Year: 2011,
    Power: 240,
    Color: 'Yellow',
    Driver: {
        DriverName: 'Elena',
        DriverAge: 50,
        DriverGender: 'Female',
        Experience: 15
    }
})
carss.push ({
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
})
carss.push ({
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
})
carss.push ({
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
})
carss.push ({
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
})
console.log(carss);

//8- проитерировать каждый массив из задания 5,6,7 при помощи while.
let i8 = 0;
while (i8 < cars.length){
    console.log(cars[i8]);
    i8 ++;
}
i8 = 0;
while (i8 < cities.length){
    console.log(cities[i8]);
    i8 ++;
}
i8 = 0;
while (i8 < carss.length){
    console.log(carss[i8]);
    i8 ++;
}

//9- проитерировать каждый массив из задания 5,6,7 при помощи for .

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
    
}
for (let i = 0; i < carss.length; i++) {
    console.log(carss[i]);
    
}

//10- проитерировать каждый массив из задания 5,6,7 при помощи  for of.

for (const car of cars) {
    console.log(car);
}
for (const citi of cities) {
    console.log(citi);
}
for (const carr of carss) {
    console.log(carr);
}

//11- взять объекты из задания 1 и превратить каждый в json.

let dogJ = JSON.stringify(dog1);
let humanJ = JSON.stringify(human1);
let carJ = JSON.stringify(car1);
let flatJ = JSON.stringify(flat1);
let bookJ = JSON.stringify(book1);

//12- взять json из задания 11 и превратить их обратно в объекты.

let dogP = JSON.parse(dogJ);
let humanP = JSON.parse(humanJ);
let carP = JSON.parse(carJ);
let flatP = JSON.parse(flatJ);
let bookP = JSON.parse(bookJ);

//13- взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

for (const car of cars) {
    let carJ = JSON.stringify(car);
}

//14- взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

for (const citi of cities) {
    let citiJ = JSON.stringify(citi);
}

//15- взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

for (const carr of carss) {
    let carrJ = JSON.stringify(carr);
}

//16- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое 
//является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив 
//skills

let users16 = [];
users16.push({
    Name: 'Name1',
    SurName: 'SurName1',
    Age: 30,
    Skills: ['Skill_1', 'Skill_2', 'Skill_3', 'Skill_4'],
})
users16.push({
    Name: 'Name2',
    SurName: 'SurName2',
    Age: 33,
    Skills: ['Skill_5', 'Skill_6', 'Skill_7', 'Skill_8'],
})
users16.push({
    Name: 'Name3',
    SurName: 'SurName3',
    Age: 25,
    Skills: ['Skill_1', 'Skill_6', 'Skill_7', 'Skill_11'],
})
users16.push({
    Name: 'Name4',
    SurName: 'SurName4',
    Age: 22,
    Skills: ['Skill_15', 'Skill_12', 'Skill_33', 'Skill_42'],
})
users16.push({
    Name: 'Name15',
    SurName: 'SurName5',
    Age: 42,
    Skills: ['Skill_1', 'Skill_15', 'Skill_22', 'Skill_33'],
})
for (const user of users16) {
    console.log(user);
    console.log(user.Skills);
        for (const skill of user.Skills) {
            console.log(skill);
        }
}


//17- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое 
//является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив 
//skills. Скопировать все skills всех пользователей в отедльный массив

let user17 = []
for (const user of users16) {
        for (const skill of user.Skills) {
            user17.push (skill);
        }
}
console.log(user17);

//18- За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.

let users18 = [{
    name: 'vasya', 
    age: 31, 
    status: false, 
    skills: ['java', 'js']
}, {
    name: 'petya', 
    age: 30, 
    status: true, 
    skills: ['java', 'js', 'html']
}, {
    name: 'kolya', 
    age: 29, 
    status: true, 
    skills: ['mysql', ',mongo']
}, {
    name: 'olya', 
    age: 28, 
    status: false, 
    skills: ['java', 'js']
}, {
    name: 'max', 
    age: 30, 
    status: true, 
    skills: ['mysql', ',mongo']
}];

for (const us of users18) {
    console.log(us);
    for (const sk of us.skills) {
        console.log(sk);
    }
}

//=======================//

let users19 = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
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

//19- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в 
//інший порожній масив.

let usersAdr = [];
for (const adr of users19) {
    //console.log(adr);
    //console.log(adr.address);
    usersAdr.push(adr.address);
}
console.log(usersAdr);

//20- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за 
//допомоги document.createElement. Всі данні в одному блоці.

for (let i = 0; i < users19.length; i++) {
    let div = document.createElement('div');
    div.innerText = JSON.stringify(users19[i]);
    document.body.appendChild(div);
}

//21- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за 
//допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

for (let i = 0; i < users19.length; i++) {
    let div = document.createElement('div');
    let divName = document.createElement('div');
    let divAge = document.createElement('div');
    let divStatus = document.createElement('div');
    let divAddress = document.createElement('div');

    divName.innerHTML = 'Name: ' + JSON.stringify(users19[i].name);
    divAge.innerHTML = 'Age: ' + JSON.stringify(users19[i].age);
    divStatus.innerHTML = 'Status: ' + JSON.stringify(users19[i].status);
    divAddress.innerHTML = 'Address: ' + JSON.stringify(users19[i].address);

    div.appendChild(divName);
    div.appendChild(divAge);
    div.appendChild(divStatus);
    div.appendChild(divAddress);
    document.body.appendChild(div);
}

//22- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги 
//document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим 
//блоком, з блоками для кожної властивості

let users22 = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
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

let div1 = document.createElement('div');
document.body.appendChild(div1);

for (let i = 0; i < users19.length; i++) {
    let div = document.createElement('div');
    let divName = document.createElement('div');
    let divAge = document.createElement('div');
    let divStatus = document.createElement('div'); 
    let divAddress = document.createElement('div');

    divName.innerHTML = 'Name: ' + JSON.stringify(users19[i].name);
    divAge.innerHTML = 'Age: ' + JSON.stringify(users19[i].age);
    divStatus.innerHTML = 'Status: ' + JSON.stringify(users19[i].status);
        
        for (const adr in users19[i].address) {
            const element = users19[i].address[adr];
            console.log(users19[i].address[adr]);
            let divAddr = document.createElement('div');
            divAddr.innerText = JSON.stringify(users19[i].address[adr]);
            divAddress.appendChild(divAddr);
        }
    div.appendChild(divName);
    div.appendChild(divAge);
    div.appendChild(divStatus);
    div.appendChild(divAddress);
    div1.appendChild(div);
}

//23- Дано 2 масиви з рівною кількістю об'єктів.
//З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//Записати цей об'єкт в новий масив
//Частковий приклад реультату:

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
let usersWithCities = [];
for (let i = 0; i < usersWithId.length; i++) {
    usersWithCities[i] = usersWithId[i];
    for (let j = 0; j < citiesWithId.length; j++) {
        if (usersWithId[i].id === citiesWithId[j].user_id) {
            usersWithCities[i]['address :'] = citiesWithId[j];
        }
    }
}
console.log(usersWithCities);

//24- створити розмітці блок з id, class та текстом в середені. 
//Зчитати окремо цей текст з селекторів по id , class та тегу

let div24 = document.createElement('div');

div24.id = "id24";
div24.classList.add ("class24");
div24.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
document.body.appendChild(div24);

let textId = document.getElementById ("id24");
console.log(textId.innerText);

let textClass = document.getElementsByClassName ("class24");
for (const text of textClass) {
    console.log(text.innerText);
}

let textDiv = document.getElementsByTagName('div');
for (const text of textDiv) {
    if(text.id === "id24"){
    console.log(text.innerText);
    }
}

//25- змінити цей текст використовуючи селектори id, class,  tag
textId.innerText = 'змінити цей текст використовуючи селектор id';

for (const text of textClass) {
    text.innerText = 'змінити цей текст використовуючи селектор class';
}

for (const text of textDiv) {
    if(text.id === "id24"){
    text.innerText = 'змінити цей текст використовуючи селектор tag';
    }
}

//26- змінити висоту та ширину блоку використовуючи селектори id, class,  tag

textId.style.height = '20px';
textId.style.width = '50%';

for (const text of textClass) {
    text.style.height = '30px';
    text.style.width = '75%';
}

for (const text of textDiv) {
    if(text.id === "id24"){
        text.style.height = '45px';
        text.style.width = '500px';
    }
}

//27- за допомоги document.createElement та appendChild створити таблицю 
//на 1 рядок з трьома ячейками всередені

let divTable = document.createElement('div');
let table = document.createElement('table');
let tr = document.createElement('tr');
let td1 = document.createElement('td');
let td2 = document.createElement('td');
let td3 = document.createElement('td');

tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
table.appendChild(tr);
divTable.appendChild(table);
document.body.appendChild(divTable);

//28- за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків 
//з трьома ячейками всередені

let divTable28 = document.createElement('div');
let table28 = document.createElement('table');
let tr28 = document.createElement('tr');

for (let i = 0; i < 10; i++) {
    tr28[i] = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    tr28[i].appendChild(td1);
    tr28[i].appendChild(td2);
    tr28[i].appendChild(td3);
    table28.appendChild(tr28[i]);
}
divTable28.appendChild(table28);
document.body.appendChild(divTable28);

//29- за допомоги document.createElement, appendChild та 2х циклів створити таблицю 
//на 10 рядків з 5 ячейками всередені

let divTable29 = document.createElement('div');
let table29 = document.createElement('table');

for (let i = 0; i < 10; i++) {
    let tr29 = document.createElement('tr');
    table29.appendChild(tr29);
    
    for (let j = 0; j < 5; j++) {
        let td29 = document.createElement('td');
                tr29.appendChild(td29);
    }
}
divTable29.appendChild(table29);
document.body.appendChild(divTable29);

//30- за допомоги document.createElement, appendChild та 2х циклів створити таблицю 
//на n рядків з m ячейками всередені. n та m отримати з prompt

let n = prompt('Введіть кількість рядків в таблиці');
let m = prompt('Введіть кількість ячейок всередині рядка');
let divTable30 = document.createElement('div');
let table30 = document.createElement('table');

for (let i = 0; i < n; i++) {
    let tr30 = document.createElement('tr');
    table30.appendChild(tr30);
    
    for (let j = 0; j < m; j++) {
        let td30 = document.createElement('td');
                tr30.appendChild(td30);
    }
}
divTable30.appendChild(table30);
document.body.appendChild(divTable30);

//31--Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. 
//У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають class
// - знайти всі параграфи ,та змінити текст на hello oktenweb!
// - знайти всі div та змінити ім колір на червоний

let class31 = document.querySelectorAll("class");
console.log(class31);

let p31 = document.querySelectorAll("p");
for (const p of p31) {
    p.innerText = 'hello oktenweb!';
}

let div31 = document.querySelectorAll("div");
for (const div of div31) {
    div.style.backgroundColor = 'red';
}




