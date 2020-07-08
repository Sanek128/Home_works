/*
Взяти файл template_2.html та працювати в ньому
- Напишіть код, який :
-- змінює колір тексту елемнту з ід main_header на будь-який інший
-- робить шириниу елементу ul 400 пікселів
-- робить шириниу всіх елементів з класом linkList шириною 50%
-- отримує текст який зберігається в елементі з класом listElement2
-- отримує всі елементи li та змінює ім колір фону на сірий
-- отримує всі елементи 'a' та додає їм клас anchor
-- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір 
   тексту на 40 пікселів
-- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
-- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
-- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . 
   Колір отримати з prompt()
-- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
-- отримати елементи p та змінити їм paddin на довільне значення
-- отримати елементи з класом text2 та змінити їм текст на довільне значення
 */

let mainHeader = document.getElementById('main_header');
mainHeader.style.color = 'green';

let ulWidth = document.getElementsByTagName('ul');
ulWidth[0].style.width = '400px'

let linkListWidth = document.getElementsByClassName('linkList');
   for (let i = 0; i < linkListWidth.length; i ++)
      linkListWidth[i].style.width = '50%';

let textListElement2 = document.getElementsByClassName('listElement2');
console.log(textListElement2[0].innerText);

let liBackgroundColor = document.getElementsByTagName('li');
   for (let i = 0; i < liBackgroundColor.length; i ++)
      liBackgroundColor[i].style.backgroundColor = 'gray';

let elementA = document.getElementsByTagName('a');
   for (let i = 0; i < elementA.length; i ++){
      elementA[i].classList.add('anchor');

      if (elementA[i].innerText === 'link3') {
        console.log(elementA[i].innerText);
        elementA[i].style.fontSize = '40px';
      } 

      elementA[i].classList.add(`element_${elementA[i].innerText}`)
   }

let subHeader = document.getElementsByClassName('sub-header');
let colorSubHeader = prompt('Введіть колір sub-header фона');
   for (let i = 0; i < subHeader.length; i ++)
      subHeader[i].style.backgroundColor = `${colorSubHeader}`;

let colorTextSubHeader = prompt('Введіть колір sub-header текста');
   for (let i = 0; i < subHeader.length; i ++)
      if (subHeader[i].innerText === 'content 2 segment'){
         subHeader[i].style.color = `${colorTextSubHeader}`;
      }

let content1 = document.getElementsByClassName('content_1');
let content1Text = prompt('Введіть довільний текст для заміни в класі content_1');
content1[0].innerText = `${content1Text}`;

let paragraf = document.getElementsByTagName('p');
   for (let i = 0; i < paragraf.length; i ++)
      paragraf[i].style.padding = '25px';

let text2 = document.getElementsByClassName('text2');
text2[0].innerText = `-- отримати елементи з класом text2 та змінити їм текст на довільне значення`;
