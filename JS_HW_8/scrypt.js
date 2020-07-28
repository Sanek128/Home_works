//- Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

let textTask1 = document.getElementById ('textTask1');
textTask1.oninput = () =>{
    localStorage.setItem('textTask1', textTask1.value);
}
textTask1.value = localStorage.getItem('textTask1');

//- Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//  Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
//  Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//  Сделайте ваш скрипт как можно более универсальным.

let formTask2 = document.forms.formTask2;

formTask2.areaTask2.oninput = () =>{
    localStorage.setItem('area', areaTask2.value);
}
formTask2.areaTask2.value = localStorage.getItem('area');

formTask2.textTask2.oninput = () =>{
    localStorage.setItem('name', textTask2.value);
}
formTask2.textTask2.value = localStorage.getItem('name');

formTask2.telTask2.oninput = () =>{
    localStorage.setItem('phone', telTask2.value);
}
formTask2.telTask2.value = localStorage.getItem('phone');

formTask2.numTask2.oninput = () =>{
    localStorage.setItem('age', numTask2.value);
}
formTask2.numTask2.value = localStorage.getItem('age');

formTask2.check1Task2.onclick = () =>{
    localStorage.setItem('checkbox1', check1Task2.checked);
}
formTask2.check1Task2.checked = localStorage.getItem('checkbox1');

formTask2.check2Task2.onclick = () =>{
    localStorage.setItem('checkbox2', check2Task2.checked);
}
formTask2.check2Task2.checked = localStorage.getItem('checkbox2');


//------------------------------

let radio1Task2 = document.getElementById('radio1Task2')
radio1Task2.onclick = () =>{
    localStorage.setItem('radio1', radio1Task2.checked);
}
radio1Task2.checked = localStorage.getItem('radio1');

// formTask2.radio1Task2.onclick = () =>{
//     localStorage.setItem('radio1', radio1Task2.checked);
// }
// formTask2.radio1Task2.checked = localStorage.getItem('radio1');

let radio2Task2 = document.getElementById('radio2Task2')
radio2Task2.onclick = () =>{
    localStorage.setItem('radio2', radio2Task2.checked);
}
radio2Task2.checked = localStorage.getItem('radio2');

// formTask2.radio2Task2.onclick = () =>{
//     localStorage.setItem('radio2', radio2Task2.checked);
// }
// formTask2.radio2Task2.checked = localStorage.getItem('radio2');

//-----------------------------------

formTask2.selectTask2.onchange=()=>{
    localStorage.setItem('gender',formTask2.selectTask2.selectedIndex);
}
formTask2.selectTask2.selectedIndex=localStorage.getItem('gender');


