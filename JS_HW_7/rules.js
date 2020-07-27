
// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление
//    по всем заголовкам которые есть в тексте.
//    При клике на пункт оглавления вы должны отправляться к этому пункту в тексте


let div = document.createElement('div');
document.body.appendChild(div);
let menu = document.createElement('ul');
let menuText = document.getElementsByTagName('h2');
for (let i = 0; i < menuText.length; i++) {
    menuText[i].id = i + 1;
    let li = document.createElement('li');
    li.innerHTML = `<a href = "#${i + 1}" > ${menuText[i].textContent}</a>`;
    menu.appendChild(li);
}
div.appendChild(menu);
div.style.width = '25%';
div.style.float = 'left';
let wrap = document.getElementById('wrap');
wrap.style.width = '75%'
wrap.style.float = 'right';