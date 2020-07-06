
//---- 1 ----//
let nMass = [4, 6, 2, 45, 67];
let sMass = ['first', 'second', 'third', 'fourth', 'fifth'];
let fMass = [56, 'Name', true, false, 'Apollo13'];

console.log(nMass);
console.log(sMass);
console.log(fMass);

//---- 2 -----//

let mass2 = [];
mass2[0] = 'Bud';
mass2[1] = 'yake';
mass2[2] = 'znachennya';
console.log(mass2);

//---- 3 -----//

for (let i = 0; i < 10; i++) 
{
    document.write('<div>Блок div</div>');
    //document.write('<br>')
}

//---- 4 ----//

for (let i = 1; i < 11; i++) 
{
    document.write('<div> Блок div № ', i, '</div>');
    //document.write('<br>')
}

//---- 5 ----//

let i = 0;
while (i < 20) 
{
    document.write('<h1>Блок H1</h1>');
    i++;
}

//---- 6 ----//

i = 1;
while (i < 21) 
{
    document.write('<h1>Блок H1 № ', i, '</h1>');
    i++;
}

//---- 7 ----//

let mas7 = [2, 5, 9, 4, 7, 1, 21, 43, 90, 34];
for (let i = 0; i < mas7.length; i++)
    console.log(mas7[i])

//---- 8 ----//

let mas8 = ['Раз','Два', 'Три', 'Четыре', 'Пять', 'вышел', 'зайчик', 'погулять', '!', ':)'];
for (let i = 0; i < mas8.length; i++)
    console.log(mas8[i])

//---- 9 ----//

let mas9 = ['Раз','Два', 'Три', 'Четыре', 'Пять', 101, 911, null, true, false];
for (let i = 0; i < mas9.length; i++)
    console.log(mas9[i])

//---- 10 ----//

let mas10 = ['Раз','Два', 'Три', 'Четыре', 'Пять', 101, 911, null, true, false];
for (let i = 0; i < mas10.length; i++)
    if (typeof mas10[i] === 'boolean')
    console.log(mas10[i])

//---- 11 ----//

let mas11 = ['Раз','Два', 'Три', 'Четыре', 'Пять', 101, 911, null, true, false];
for (let i = 0; i < mas11.length; i++)
    if (typeof mas11[i] === 'number')
    console.log(mas11[i])

//---- 12 ----//

let mas12 = ['Раз','Два', 'Три', 'Четыре', 'Пять', 101, 911, null, true, false];
for (let i = 0; i < mas12.length; i++)
    if (typeof mas12[i] === 'string')
    console.log(mas12[i])

//---- 13 ----//

let mas13 = [];
mas13[0] = 25;
mas13[1] = true;
mas13[2] = null;
mas13[3] = 'Sun';
mas13[4] = 'July';
mas13[5] = 2;
mas13[6] = 2020;
mas13[7] = 987654321;
mas13[8] = false;
mas13[9] = undefined;

for (let i = 0; i < 10; i++)
    console.log(mas13[i])

//---- 14 ----//

for (let i = 0; i < 10; i++)
{
    console.log(i);
    document.write(i);
}

//---- 15 ---- //

document.write('<br>')

for (let i = 0; i < 100; i++)
{
    console.log(i);
    document.write(i);
}

//---- 16 ----//

document.write('<br>')

for (let i = 0; i < 100; i += 2)
{
    console.log(i);
    document.write(i);
}

//---- 17 / 18 ----//

document.write('<br>')

for (let i = 0; i < 100; i ++)
{
    if ((i % 2) === 0){
    console.log(i);
    document.write(i);
    }
}

//---- 19 ----//

document.write('<br>')

for (let i = 0; i < 100; i ++)
{
    if ((i % 2) != 0) {
    console.log(i);
    document.write(i);
    }
}


//---- 20 ----//

for (let i = 0; i < 3; i ++)
    for (let j = 0; j < 60; j ++)
        if (i === 2 && j === 0)
        {
            console.log('Пройшло 2 хвилини');
            break;
        } else 
            console.log(i, 'min', j, 'sec')
   

//---- 21 ----//

for (let i = 0; i < 3; i ++)
    for (let j = 0; j < 60; j ++)
        if (i === 2 && j === 20)
            {
                console.log('Пройшло 2 години 20 хвилин');
                break;
            } else 
        for (let k = 0; k < 60; k ++)
            console.log(i, 'hour', j, 'min', k, 'sec')
        

//---- Додатково ----//

// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово

let masD1 = ['a', 'b', 'c'];
let slovo1 = '';
for (let i = 0; i < masD1.length; i++)
            slovo1 = slovo1 + masD1[i];
console.log(slovo1)

//Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово

let masD2 = ['a', 'b', 'c'];
let slovo2 = '';
let d2 = 0;

while (d2 < masD2.length)
    {
    slovo2 = slovo2 + masD2[d2];
    d2++;
    }
console.log(slovo2)

//Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово

let masD3 = ['a', 'b', 'c'];
let slovo3 = '';
for(const slovo of masD3){
    slovo3 = slovo3 + slovo;
}
console.log(slovo3)


//==========================================================================================================//

//1- Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

let masD4 = ['a', 'b', 'c'];
for(let i = 1; i < 4; i++)
    masD4.push(i);
console.log(masD4)

//2- Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1]

let masD5 = [1, 2, 3];
let masD5N = [];
let i2 = masD5.length;
i2 --;
while(i2 < masD5.length && i2 >= 0){
    let m = masD5[i2];
    masD5N.push(m);
    i2 --;
}    
console.log(masD5N)

//3- Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6

let masD6 = [1, 2, 3];
for(let i = 4; i < 7; i++)
    masD6.push(i);
console.log(masD6)

//4- Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6


let masD7 = [1, 2, 3];
masD7.unshift(6);
masD7.unshift(5);
masD7.unshift(4);
console.log(masD7)

//5-Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

let masD8 = ['js', 'css', 'jq'];
let d8 = masD8.shift();
document.write(d8);

//6- Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

let masD9 = ['js', 'css', 'jq'];
let d9 = masD9.pop();
document.write('<br>');
document.write(d9);

//7- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5]

let masD10 = [1, 2, 3, 4, 5];
masD10 = masD10.slice(3, 5);
console.log(masD10);

//8- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2]

let masD11 = [1, 2, 3, 4, 5];
masD11 = masD11.slice(0, 2);
console.log(masD11);

//9- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5]

let masD12 = [1, 2, 3, 4, 5];
masD12.splice(1, 2);
console.log(masD12);

//10-Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5]

let masD13 = [1, 2, 3, 4, 5];
masD13.splice(3, 0, 'a', 'b', 'c');
console.log(masD13);

//11- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']

let masD14 = [1, 2, 3, 4, 5];
masD14.splice(1, 0, 'a', 'b');
//console.log(masD14);
masD14.splice(6, 0, 'c');
//console.log(masD14);
masD14.splice(8, 0, 'e');
console.log(masD14);

//12- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let masD15 = [1, 23, 45, 44, 78, 77, 5, 9, 8, 2];
for (let i = 0; i < 10; i ++)
{
    if ((masD15[i] % 2) === 0)
    {
    console.log(masD15[i]);
    }
}

//13- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. 
// За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

let masD16 = [1, 23, 45, 44, 78, 77, 5, 9, 8, 2];
let masD16New = [];
for (let i = 0; i < 10; i ++)
{
let sm = masD16[i];
masD16New.push(sm);
}
console.log(masD16);
console.log(masD16New);

//14- Взяти масив з 10 чисел або створити його. 
// Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let masD17 = [12, 213, 5, 44, 8, 71, 15, 39, 81, 22];
let masD17New = [];
for (let i = 0; i < 10; i ++)
{
//let sm = masD17[i];
masD17New[i] = masD17[i];
}
console.log(masD17);
console.log(masD17New);

//===================================================//
/*
зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
1. перебрати його циклом while
2. перебрати його циклом for
3. перебрати циклом while та вивести  числа тільки з непарним індексом
4. перебрати циклом for та вивести  числа тільки з непарним індексом
5. перебрати циклом while та вивести  числа тільки парні  значення
6. перебрати циклом for та вивести  числа тільки парні  значення
7. замінити кожне число кратне 3 на слово "okten"
8. вивести масив в зворотньому порядку.
9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
10
 створити пустий масив та :
- заповнити його 50 парними числами за допомоги циклу.
- заповнити його 50 непарними числами за допомоги циклу.
*/

//1. перебрати його циклом while

let masD18 = [2,17,13,6,22,31,45,66,100,-18];
let i18 = 0;
while(i18 < masD18.length){
    //console.log(masD18[i18]);
    i18++;
}

//2. перебрати його циклом for

for(let i = 0; i < masD18.length; i++)
    //console.log(masD18[i]);
    
//3. перебрати циклом while та вивести  числа тільки з непарним індексом

i18 = 0
while(i18 < masD18.length)
{
    if ((i18 % 2) != 0)
    {
        console.log(masD18[i18]);
    }
    i18++;
}

//4. перебрати циклом for та вивести  числа тільки з непарним індексом

for(let i = 0; i < masD18.length; i++)
    if ((i % 2) != 0)
    {
        console.log(masD18[i]);
    }

//5. перебрати циклом while та вивести  числа тільки парні  значення

i18 = 0
while(i18 < masD18.length)
{
    if ((masD18[i18] % 2) === 0)
    {
        console.log(masD18[i18]);
    }
    i18++;
}

//6. перебрати циклом for та вивести  числа тільки парні  значення

for(let i = 0; i < masD18.length; i++)
    if ((masD18[i] % 2) === 0)
    {
        console.log(masD18[i]);
    }

//7. замінити кожне число кратне 3 на слово "okten"

//console.log(masD18);
for(let i = 0; i < masD18.length; i++)
    if ((masD18[i] % 3) === 0)
    {
        masD18[i] = 'okten';
    }
    console.log(masD18);

//8. вивести масив в зворотньому порядку.

i18 = masD18.length-1;
//console.log(masD18);
while(i18 >= 0 )
{
    console.log(masD18[i18]);
    i18 --;
}

//9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//------------------------------------------------------//

//1-1. перебрати його циклом while

masD18 = [2,17,13,6,22,31,45,66,100,-18];
i18 = masD18.length-1;
while(i18 >= 0){
   // console.log(masD18[i18]);
    i18--;
}

//2-1. перебрати його циклом for

for(let i = masD18.length-1; i >= 0; i--)
    //console.log(masD18[i]);
    
//3-1. перебрати циклом while та вивести  числа тільки з непарним індексом

i18 = masD18.length-1;
while(i18 >= 0)
{
    if ((i18 % 2) != 0)
    {
        console.log(masD18[i18]);
    }
    i18--;
}

//4-1. перебрати циклом for та вивести  числа тільки з непарним індексом

for(let i = masD18.length; i >= 0; i--)
    if ((i % 2) != 0)
    {
        console.log(masD18[i]);
    }

//5-1. перебрати циклом while та вивести  числа тільки парні  значення

i18 = masD18.length-1;
while(i18 >= 0)
{
    if ((masD18[i18] % 2) === 0)
    {
        console.log(masD18[i18]);
    }
    i18--;
}

//6-1. перебрати циклом for та вивести  числа тільки парні  значення

for(let i = masD18.length-1; i >= 0; i--)
    if ((masD18[i] % 2) === 0)
    {
        console.log(masD18[i]);
    }

//7-1. замінити кожне число кратне 3 на слово "okten"

//console.log(masD18);
for(let i = masD18.length-1; i >= 0; i--)
    if ((masD18[i] % 3) === 0)
    {
        masD18[i] = 'okten';
    }
    console.log(masD18);

// створити пустий масив та :

let masD19 = [];
let i19 = 0;

// - заповнити його 50 парними числами за допомоги циклу.
while (i19 < 50)
{
    let number = Math.floor(Math.random() * 300);
        if ((number % 2) === 0)
        {
            masD19[i19] = number;
            i19++;
        }
    //console.log(number);
}
console.log(masD19)

// - заповнити його 50 непарними числами за допомоги циклу.

masD19 = [];
i19 = 0;

while (i19 < 50)
{
    let number = Math.floor(Math.random() * 300);
        if ((number % 2) != 0)
        {
            masD19[i19] = number;
            i19++;
        }
    //console.log(number);
}
console.log(masD19)

//=========================================================//

/* используя Math.random заполнить массив из ???(сколько хотите) элементов.
 диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
 2. вывести на консоль  каждый третий елемент
 3. вывести на консоль  каждый третий елемент
 но при условии что его значение является парным.
 4. вывести на консоль  каждый третий елемент
 но при условии что он имеет парное значение и
 записать их в другой массив.
 5. Вывести каждый елемент массива у которого соседний с права элемент - парный
*/

let masD20 = [];
let i20 = 0;

while (i20 < 33)
{
    masD20[i20] = Math.floor(Math.random(8) * 732);
    i20 ++;
}
console.log(masD20)

// 2. вывести на консоль  каждый третий елемент

for (let i = 2; i < 33; i += 3)
    console.log(masD20[i])

// 3. вывести на консоль  каждый третий елемент но при условии что его значение является парным.

for (let i = 2; i < 33; i += 3)
    if ((masD20[i] % 2) === 0)
    {
        console.log(masD20[i])
    }

// 4. вывести на консоль  каждый третий елемент  но при условии что он имеет парное значение и записать их в другой массив.

let masD20New = [];
for (let i = 2; i < 33; i += 3)
    if ((masD20[i] % 2) === 0)
    {
        console.log(masD20[i])
        masD20New.push(masD20[i])
    }
console.log(masD20New)

// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный

for (let i = 1; i < 33; i ++)
    if ((masD20[i] % 2) === 0)
    {
        console.log(masD20[i-1])
    }

//---------------------------//

// 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.

let masD21 = [100, 250, 50, 168, 120, 345, 188];
let chek = 0;
for (let i = 0; i < masD21.length; i++)
    chek = chek + masD21[i];
console.log(chek); 
let srChek = chek / masD21.length;
console.log(srChek); 

//3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let masD22 = [];
let i22 = 0;

while (i22 < 33)
{
    masD22[i22] = Math.floor(Math.random() * 37);
    i22 ++;
}
console.log(masD22)

let masD22New = [];
for (let i = 0; i < masD22.length; i ++)
        masD22New.push(masD22[i] * 5)
console.log(masD22New)

//4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом, додати його в інший масив.

let masD23 = [1, 3, 45, true, 'one', 'two', undefined, 34, 45, 45, 45, false, 'js', 'Java', 'Script', null, 0, 45567, 34904, 234];
console.log(masD23)
let masD23New = [];

for (let i = 0; i < masD23.length; i ++)
    if (typeof masD23[i] === 'number')
    {
        masD23New.push(masD23[i])
    }
console.log(masD23New)

