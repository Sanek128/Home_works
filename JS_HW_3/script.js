/*
-- створити об'єкт (не меньше 5ти властивостей) який описує
- собаку
- людину
- автомобіль
- квартиру
- книгу
*/

let dog1 = {Breed: 'Pitbul', Age: 3, Gender: 'Male', Name: 'Bul', Color: 'Black'};
let human1 = {Name: 'Vasia', Gender: 'Male', Age: '33', Growth: 180, Weight: 82};
let car1 = {Brand: 'Ford', Model: 'Focus', Year: 2013, Engine: '1.0 EcoBoost', Color: 'Red'};
let flat1 ={Area: 80, NuberOfRums: 3, Floor: 2, Furniture: 'Yes', Balcony: 'Yes'};
let book1 = {Name: 'Garry Poter',Genre: 'Fantastic', Pages: 369, Binding: 'Hard', Price: '20$'};

//console.log(dog1);
//console.log(human1);
//console.log(car1);
//console.log(flat1);
//console.log(book1);

/* 
-- Створити масив та вивести його в консоль:
- з 5 собак
- 3 5 людей
- з 5 автомобілів
 */

let dogs5 = ['Sharik', 'Bobik', 'Strelka', 'Belka', 'Artemon'];
let humans5 = ['Oleg', 'Anna', 'Yuriy', 'Anastasiya', 'Igor', 'Taras'];
let auto5 = ['Ford', 'Nissan', 'Lamborgini', 'Mersedes', 'Acura'];

console.log(dogs5);
console.log(humans5);
console.log(auto5);

/*
-- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково 
   повинна бути об'єктом,ще одна - масивом
- будинок
- водій
- іграшку
- стіл
- сумка
*/

let house = {
    area: 140,
    nuberOfRums: 5,
    rumsArea: {
        kitchen: 24,
        bedrooms: [15, 20, 20],
        livingRoom: 25,
        bathrooms: [8, 12]
    },
    facilitiesOnSite: ['Garage', 'Barn', 'Swimming pool', 'Guest house', 'Playground'],
    landArea: '10 acres'
}

let driver = {
    name: 'Andriy',
    surName: 'Kovalenko',
    categories: ['A', 'B', 'C', 'D', 'E'], 
    age: 45,
    adress:{
        town: 'Lviv',
        street: 'Kontraktova Ploscha',
        house: 34,
        flat: 16
    }
}

let toy = {
    toyName: 'David',
    toyClothes: ['Jacket', 'Hat', 'Pants', 'Shirt', 'Boots'],
    manufacturer: {
        counrty: 'China',
        town: 'Hong Kong',
        factory: 'China Toys'
    },
    price: '25$',
    childAge: '5-7 years'
}

let table = {
    name: 'Imperator',
    material: 'Oak',
    price: '200$',
    manufacturer: {
        counrty: 'Ukraine',
        town: 'Kharkov',
        factory: 'Livs'
    },
    dimensions: [150, 100, 80]
}

let bag = {
    gender: 'Female',
    collection: 'Summer 2020',
    materials: ['Leather', 'Swarovski stones', 'Precious metals'],
    manufacturer: {
        counrty: 'Italia',
        town: 'Milan',
        factory: 'Guchi'
    },
    price: '2000 $'
}

//console.log(house);
//console.log(driver);
//console.log(toy);
//console.log(table);
//console.log(bag);

/*
Дан массив:
- звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
- статус Андрія
- статус Максима
- ім'я передостаннього об'єкту
- ім'я третього об'єкта
- вік Олега
- вік Олі
- вік + ім'я 5го об'єкта
- вік + сатус Анни
 */

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

console.log(users[7].status);
console.log(users[4].status); //max
console.log(users[10].status); //max
console.log(users[(users.length - 2)].name);
console.log(users[2].name);
console.log(users[6].age);
console.log(users[3].age); //olya
console.log(users[9].age); //olya
console.log(users[4].age + ', ' + users[4].name);
console.log(users[5].age + ', ' + users[5].status);





