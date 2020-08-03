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
formTask2.check1Task2.checked = JSON.parse(localStorage.getItem('checkbox1'));


formTask2.check2Task2.onclick = () =>{
    localStorage.setItem('checkbox2', check2Task2.checked);
}
formTask2.check2Task2.checked = JSON.parse(localStorage.getItem('checkbox2'));

let radioTask2 = document.getElementsByName('radioTask2');
console.log(radioTask2[0].checked);
console.log(radioTask2[1].checked);

for (let i = 0; i < radioTask2.length; i++) {
    
    radioTask2[i].onclick = () => {
        //console.log(`radio${i + 1}`, radioTask2[i].checked);
        //localStorage.setItem(`radio${i + 1}`, radioTask2[i].checked);

        if (radioTask2[0].checked){
            localStorage.setItem('radio1', true);
            localStorage.setItem('radio2', false);
        } 
        if (radioTask2[1].checked){
            localStorage.setItem('radio2', true);
            localStorage.setItem('radio1', false);
        }
    }
    // console.log(`radio${i + 1}`, JSON.parse(localStorage.getItem(`radio${i + 1}`)))
    // radioTask2[i].checked = JSON.parse(localStorage.getItem(`radio${i + 1}`));
}

formTask2.selectTask2.onchange=()=>{
    localStorage.setItem('gender',formTask2.selectTask2.selectedIndex);
}
formTask2.selectTask2.selectedIndex=localStorage.getItem('gender');

//-Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), 
// затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории 
// (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

let formTask3 = document.forms.formTask3;

//let st = 1;
formTask3.save.onclick = () =>{
    localStorage.setItem(localStorage.length + 1, formTask3.areaTask3.value);
    //localStorage.setItem('Save - ' + st, formTask3.areaTask3.value);
    //st ++;
}

formTask3.butPrev.onclick = () =>{
    let x;
    for (const save in localStorage) {
        if (localStorage.hasOwnProperty(save)) {
            if (localStorage.getItem(save) === formTask3.areaTask3.value) {
                x = save;
            }
        }
    }
    if (x === '1'){
        return;
    }
    formTask3.areaTask3.value = localStorage.getItem(x - 1);
}

formTask3.butNext.onclick = () =>{
    let x;
    for (const save in localStorage) {
        if (localStorage.hasOwnProperty(save)) {
            if (localStorage.getItem(save) === formTask3.areaTask3.value) {
                x = save;
            }
        }
    }
    if (x == localStorage.length){
        return;
    }
    formTask3.areaTask3.value = localStorage.getItem(+ x + 1);
}

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//   Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
//   Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, 
//   в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

// let usersBook = [
//     {
//         name: 'Test',
//         phone: 987654321,
//         email: 'test@gmail.com',
//         firma: 'Stropy',
//         otdel: 'OK',
//         bd: '30-05-2002'
//       }
// ];

let usersBook = JSON.parse(localStorage.getItem('usersBook')) || [];

// console.log(usersBook);


// console.log(localStorage.getItem('usersBook'));
// console.log(JSON.parse(localStorage.getItem('usersBook')));



// console.log(usersBook);

//localStorage.setItem('usersBook', JSON.stringify(usersBook))

//console.log(localStorage.getItem('usersBook'));
console.log(usersBook);

  
let usersDiv = document.getElementById('users');
let userPib = document.getElementById('pib');
let userPhone = document.getElementById('tel');
let userEmail = document.getElementById('email');
let userFirma = document.getElementById('firma');
let userViddil = document.getElementById('viddil');
let userDate = document.getElementById('date');
let userSave = document.getElementById('userSave');
  
let userEditSave = document.getElementById('userEditSave');
let userEditName = document.getElementById('userEditName');
let userEditPhone = document.getElementById('userEditPhone');

function addUser() {

    localStorage.setItem('usersBook', JSON.stringify(usersBook))

    usersDiv.innerHTML = ''
  
    let x = localStorage.getItem('usersBook');
    usersBook = JSON.parse(x);
    //localStorage.setItem('usersBook', JSON.stringify(usersBook))

    usersBook.forEach(({ name, phone, email, firma, otdel, bd }, index) => {
        let userDiv = document.createElement('div');
        let userDelete = document.createElement('button');
        let userEdit = document.createElement('button');
  
        userDelete.innerText = 'Delete'
        userEdit.innerText = 'Edit'
        userEdit.style.marginLeft = '5px';
        userDiv.innerText = `${ index + 1 }. name: ${ name }, phone: ${ phone }, email: ${email}, firma: ${firma}, otdel: ${otdel}, bd: ${bd} \n`
        userDiv.style.border = '2px solid grey';
        userDiv.style.padding = '3px'
        userDiv.style.marginTop = '2px'
  
        userDelete.onclick = () => {
            usersBook.splice(index, 1);
            localStorage.setItem('usersBook', JSON.stringify(usersBook))
            addUser();
        }
  
        userEdit.onclick = () => {
            editUser({ name, phone, email, firma, otdel, bd }, index);
        }
        userDiv.appendChild(userDelete)
        userDiv.appendChild(userEdit)
        usersDiv.appendChild(userDiv);
    });
}
  
addUser()
  
userSave.onclick = () => {
    const name = userPib.value;
    const phone = userPhone.value;
    const email = userEmail.value;
    const firma = userFirma.value;
    const otdel = userViddil.value;
    const bd = userDate.value;
  
    usersBook.push({name, phone, email, firma, otdel, bd})
    localStorage.setItem('usersBook', JSON.stringify(usersBook))
    addUser();
}
  
function editUser(user, index) {
    document.getElementById('editUser').style.display = 'block'
  
    userEditName.value = user.name
    userEditPhone.value = user.phone
    userEditEmail.value = user.email
    useEditFirma.value = user.firma
    userEditViddil.value = user.otdel
    userEditDate.value = user.bd
    
    userEditSave.onclick = () => {
        usersBook[index].name = userEditName.value
        usersBook[index].phone = userEditPhone.value
        usersBook[index].email = userEditEmail.value
        usersBook[index].firma = useEditFirma
        usersBook[index].otdel = userEditViddil
        usersBook[index].bd = userEditDate
  
        localStorage.setItem('usersBook', JSON.stringify(usersBook))
  
        addUser();
  
        document.getElementById('editUser').style.display = 'none'
    }
}
  

