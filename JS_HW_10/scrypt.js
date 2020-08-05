//https://ru.stackoverflow.com/questions/138337/%D0%A4%D0%BE%D1%80%D0%BC%D0%B0%D1%82-%D0%B4%D0%B0%D1%82%D1%8B-%D0%B2-js

Date.prototype.format = function (mask, utc) {
    return dateFormat(this, mask, utc);
};
let dataOperacii = new Date;
//---------------------------------------

function userCard(cardNumber) {
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let key;
    if (cardNumber > 0 && cardNumber < 4){
        key = cardNumber;
    } else {
        console.log('Невірний номер карти')
    }

    function addTimeInHistory(operationType, credits, operationTime) {
        historyLogs.push({operationType ,credits, operationTime})
    }

    function getCardOptions() {
        return {key,balance,transactionLimit,historyLogs}
        }

    function putCredits(credits) {
        balance += credits;
        addTimeInHistory('Put Credits', credits, dataOperacii.format("dd/mm/yyyy,HH:MM:ss"))
    }

    // Ви можете брати кошти з картки, якщо ліміт транзакцій та залишок коштів
    // перевищують кількість коштів, які ви бажаєте взяти. Якщо ні, то слід записати
    // відповідне повідомлення у консолі (скористайтеся console.error)

    function takeCredits(credits) {
        if (credits <= balance && credits <= transactionLimit) {
            balance -= credits;
        } else {
            console.error ('Недостатньо коштів абo перевищений ліміт зняття');
        }
        addTimeInHistory('Take Credits', credits, dataOperacii.format("dd/mm/yyyy,HH:MM:ss"))
    }

    function setTransactionLimit(newTransactionLimit) {
        transactionLimit = newTransactionLimit;
        addTimeInHistory('Set Transaction Limit', newTransactionLimit, dataOperacii.format("dd/mm/yyyy,HH:MM:ss"))
    }

    // Ця функція отримує два аргументи - кількість кредитів, які потрібно передати,
    // та карту одержувача (інший об’єкт, створений функцією `userCard` - card1):
    // card3.transferCredits(50, card1);
    // Кошти, які ви хочете передати, повинні обкладатися податками 0,5%.
    // Не забудьте перед перерахуванням перевірити залишок балансу та ліміт
    // транзакцій відправника кредитів (card3)
    
    function transferCredits(money, cardNumber) {
        if (money <= balance && money <= transactionLimit){
            balance -= money * 1.005;
            cardNumber.putCredits(money);
        } else {
            console.log('Помилка. Перевірте реквізити')
        }
    } 
    return { getCardOptions, putCredits, takeCredits, setTransactionLimit, transferCredits }
}
/*
const card1 = userCard(1);
const card3 = userCard(3); 
console.log('----------------');
console.log('Card 3');
card3.getCardOptions(); 
console.log(card3.getCardOptions());

console.log('----------------');
console.log('Card 1');
card1.getCardOptions();
console.log(card1.getCardOptions());

console.log('----------------');
card3.putCredits(150);
console.log('card3.putCredits(150)');
console.log(card3.getCardOptions());

console.log('----------------');
card3.takeCredits(100);
console.log('card3.takeCredits(100)');
console.log(card3.getCardOptions());

console.log('----------------');
card3.setTransactionLimit(5000);
console.log('card3.setTransactionLimit(5000)');
console.log(card3.getCardOptions());

console.log('----------------');
console.log('card3.transferCredits(50, card1)');
card3.transferCredits(50, card1);
console.log(card3.getCardOptions());
console.log(card1.getCardOptions());

const card4 = userCard(4); // test
*/
class UserAccount {
    constructor (name) {
      this.name = name;
      this.cards = [];
    }

//     Створює нову карту (використовуйте ‘userCard’ функцію) та додайте її до cards
//     Користувач повинен мати <= 3 карти.

    addCard() {
        if (this.cards.length < 3) {
            this.cards.push(userCard(this.cards.length + 1))
        } else {
            console.log('Перевищено ліміт доступних карт')
        }
    }

    //Приймає число в діапазоні {1; 3} і повертає об’єкт карти

    getCardByKey(number) {
        if (number >= 1 && number <= 3) {
            return this.cards[number - 1]
        } else {
            console.log('Невірно вказаний номер карти');
        }
    }
}

// const user = new UserAccount('Bob');
// console.log(user);

// user.addCard();
// user.addCard();
// console.log(user);

// let x = user.getCardByKey(1);
// console.log(x);

// Приклад переказу коштів:
let user = new UserAccount('Bob');
user.addCard()
user.addCard()

let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);

card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);

card2.takeCredits(50);

console.log(card1.getCardOptions()); 
console.log(card2.getCardOptions());