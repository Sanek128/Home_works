//-  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru

function Teg (name, opis, nameAtr1 = '-', opisAtr1 = '-', nameAtr2 = '-', opisAtr2 = '-') {
    this.name = name;
    this.opis = opis;
    this.atribut1 = {name: nameAtr1, opis: opisAtr1};
    this.atribut2 = {name: nameAtr2, opis: opisAtr2};
    
}

// Таким чином описати теги
// -a

let a = new Teg('a', "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок", 
'href', 'Задает адрес документа, на который следует перейти', 
'title', 'Добавляет всплывающую подсказку к тексту ссылки');
console.log(a);

// -div

let div = new Teg('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого', 
'align', 'Задает выравнивание содержимого тега <div>', 'title', 'Добавляет всплывающую подсказку к содержимому');
console.log(div);

// -h1

let h1 = new Teg('h1', 'Тег <h1> представляет собой наиболее важный заголовок первого уровня', 
'align', 'Определяет выравнивание заголовка');
console.log(h1);

// -span

let span = new Teg('span', 'Тег <span> предназначен для определения строчных элементов документа', 
'class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением', 
'id', 'Указывает имя стилевого идентификатора');
console.log(span);

// -input

let input = new Teg('input', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем', 
'align', 'Определяет выравнивание изображения', 'list', 'Указывает на список вариантов, которые можно выбирать при вводе текста');
console.log(input);

// -form

let form = new Teg('form', 'Тег <form> устанавливает форму на веб-странице', 
'action', 'Адрес программы или документа, который обрабатывает данные формы', 'name', 'Имя формы');
console.log(form);

// -option

let option = new Teg('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>', 
'label', 'Указание метки пункта списка', 'selected', 'Заранее устанавливает определенный пункт списка выделенным');
console.log(option);

// -select

let select = new Teg('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее', 
'form', 'Связывает список с формой', 'size', 'Количество отображаемых строк списка');
console.log(select);

// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. 
//   додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//-- info () - яка виводить всю інформацію про автомобіль
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний 
//   об'єкт car

let car = {
    model: 'BMV',
    manufacturer: 'BMV Motors',
    yearOfIssue: 2017,
    maxSpeed: 340,
    engineCapacity: '3.0',
    drive(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} кілометрів на годину`);
    },
    info(){
        console.log(`
        Mодель: ${this.model}, 
        Виробник: ${this.manufacturer}, 
        Рік випуску: ${this.yearOfIssue}, 
        Максимальна швидкість: ${this.maxSpeed}, 
        Об'єм двигуна: ${this.engineCapacity}
        `);
    },
    increaseMaxSpeed(newSpeed){
        this.maxSpeed += newSpeed;
    },
    changeYear(newValue){
        this.yearOfIssue = newValue;
    },
    addDriver(driverName, driverAge, driverGender){
        this.driverName = driverName;
        this.driverAge = driverAge;
        this.driverGender = driverGender;
    }
}
console.log(car);
car.info();
car.drive();
console.log(car);
car.info();
car.increaseMaxSpeed(150);
car.drive();
console.log(car);
car.info();
car.changeYear(2019);
console.log(car);
car.info();
car.addDriver('Igor', 32, 'Male');
console.log(car);
car.info();

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, 
//  рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в 
//    поточний об'єкт car

function Car (model, manufacturer, yearOfIssue, maxSpeed, engineCapacity){
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfIssue = yearOfIssue;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} кілометрів на годину`);
    };
    this.info = function(){
        console.log(`
        Mодель: ${this.model}, 
        Виробник: ${this.manufacturer}, 
        Рік випуску: ${this.yearOfIssue}, 
        Максимальна швидкість: ${this.maxSpeed}, 
        Об'єм двигуна: ${this.engineCapacity}
        `);
    };
    this.increaseMaxSpeed = function(newSpeed){
        this.maxSpeed += newSpeed;
    };
    this.changeYear = function(newValue){
        this.yearOfIssue = newValue;
    };
    this.addDriver = function(driverName, driverAge, driverGender){
        this.driverName = driverName;
        this.driverAge = driverAge;
        this.driverGender = driverGender;
    };
}

let bmvX1 = new Car('X1', 'BMV Motors', 2017, 280, '2.5');
console.log(bmvX1);
bmvX1.info();
bmvX1.drive();
console.log(bmvX1);
bmvX1.info();
bmvX1.increaseMaxSpeed(150);
bmvX1.drive();
console.log(bmvX1);
bmvX1.info();
bmvX1.changeYear(2019);
console.log(bmvX1);
bmvX1.info();
bmvX1.addDriver('Anna', 28, 'Female');
console.log(bmvX1);
bmvX1.info();

//- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, 
//  максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в 
//    поточний об'єкт car

class Car1 {
    constructor(model, manufacturer, yearOfIssue, maxSpeed, engineCapacity){
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfIssue = yearOfIssue;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }
    drive(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} кілометрів на годину`);
    }
    info(){
        console.log(`
        Mодель: ${this.model}, 
        Виробник: ${this.manufacturer}, 
        Рік випуску: ${this.yearOfIssue}, 
        Максимальна швидкість: ${this.maxSpeed}, 
        Об'єм двигуна: ${this.engineCapacity}
        `);
    }
    increaseMaxSpeed(newSpeed){
        this.maxSpeed += newSpeed;
    }
    changeYear(newValue){
        this.yearOfIssue = newValue;
    }
    addDriver(driverName, driverAge, driverGender){
        this.driverName = driverName;
        this.driverAge = driverAge;
        this.driverGender = driverGender;
    }
}

let bmvX4 = new Car1 ('X4', 'BMV Motors', 2019, 320, '3.0');
console.log(bmvX4);
bmvX4.info();
bmvX4.drive();
console.log(bmvX4);
bmvX4.info();
bmvX4.increaseMaxSpeed(150);
bmvX4.drive();
console.log(bmvX4);
bmvX4.info();
bmvX4.changeYear(2019);
console.log(bmvX4);
bmvX4.info();
bmvX4.addDriver('Egor', 40, 'Male');
console.log(bmvX4);
bmvX4.info();

//-створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

class Popelushka{
    constructor(name, age, footSize){
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let p1 = new Popelushka('Anna', 18, 18);
let p2 = new Popelushka("Elza", 19, 19);
let p3 = new Popelushka('Lena', 20, 20);
let p4 = new Popelushka('Katia', 21, 21);
let p5 = new Popelushka('Tania', 22, 22);
let p6 = new Popelushka('Olga', 23, 23);
let p7 = new Popelushka('Irina', 24, 24);
let p8 = new Popelushka('Tamara', 25, 25);
let p9 = new Popelushka('Vera', 26, 26);
let p10 = new Popelushka('Nadia', 27, 27);

let pp = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];
console.log(pp);

class Princ{
    constructor(name, age, shoe){
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let princOfPercia = new Princ('Ivan', 27, 24);

for (let i = 0; i < pp.length; i++) {
    if(pp[i].footSize === princOfPercia.shoe){
        console.log('Принцеса ' + pp[i].name + ' повинна стати попелюшкою');
    }
}

//-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, 
//   туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

function Popelushechka(name, age, footSize){
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let pop1 = new Popelushechka('Anna', 18, 18);
let pop2 = new Popelushechka("Elza", 19, 19);
let pop3 = new Popelushechka('Lena', 20, 20);
let pop4 = new Popelushechka('Katia', 21, 21);
let pop5 = new Popelushechka('Tania', 22, 22);
let pop6 = new Popelushechka('Olga', 23, 23);
let pop7 = new Popelushechka('Irina', 24, 24);
let pop8 = new Popelushechka('Tamara', 25, 25);
let pop9 = new Popelushechka('Vera', 26, 26);
let pop10 = new Popelushechka('Nadia', 27, 27);

let ppp = [pop1, pop2, pop3, pop4, pop5, pop6, pop7, pop8, pop9, pop10];
console.log(ppp);
//console.log(ppp[0].footSize);

function Princc(name, age, shoe){
    this.name = name;
    this.age = age;
    this.shoe = shoe;

    this.findPrincess = function(masivPopelushek){
        this.masivPopelushek = masivPopelushek;
        for (i = 0; i < masivPopelushek.length; i ++){
            if (masivPopelushek[i].footSize === shoe){
                console.log('Попелюшка ' + masivPopelushek[i].name + ' тобі підходить');
            }
        }
    }
}

let princIvan = new Princc('Ivan', 25, 22);
console.log(princIvan)
princIvan.findPrincess(ppp);
