/*
-- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або 
  document.getElementsByTagName :
- отримує текст з параграфа з id "content"
- отримує текст з блоку з id "rules"
- замініть текст параграфа з id 'content' на будь-який інший
- замініть текст параграфа з id 'rules' на будь-який інший
- змініть кожному елементу колір фону на червоний
- змініть кожному елементу колір тексту на синій
- отримати весь список класів елемента з id=rules і вивести їх в console.log
- отримати всі елементи з класом fc_rules
- поміняти колір тексту у всіх елементів fc_rules на червоний
 */

 let content = document.getElementById ('content');
 console.log(content.textContent);

 let rules = document.getElementById ('rules');
 console.log(rules.textContent);

 content.innerText = `замініть текст параграфа з id 'content' на будь-який інший`;

 rules.innerText = `замініть текст параграфа з id 'rules' на будь-який інший`;

 content.style.backgroundColor = 'red';
 
 rules.style.backgroundColor = 'red';

 content.style.color = 'blue';

 rules.style.color = 'blue';

 console.log(rules.classList);

 let fsRules = document.getElementsByClassName('fc_rules');
 for (let i = 0; i < fsRules.length; i ++)
    fsRules[i].style.color = 'red';


    

    



