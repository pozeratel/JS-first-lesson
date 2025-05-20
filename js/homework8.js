// Завдання 1

const logItems = function (array) {
    const newArray = [];
    for (let i = 0; i < array.length; i += 1) {
        newArray.push((`${i + 1} - ${array[i]} `))
    }
    return newArray
}
console.log(logItems(['Mango', 'Poly', 'Ajax']));


// Напиши скрипт підрахунку вартості гравіювання прикрас.Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок(в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.
const calculateEngravingPrice = function (message, pricePerWord) {
    const price = message.split(" ")
    return price.length * pricePerWord
}
console.log(calculateEngravingPrice("Lorem ipsum dolor", 20))

// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок(в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.
const findLongestWord = function (string) {
    let word = "";
    const array = string.split(" ")
    for (let i = 0; i < array.length; i += 1) {
        if (word.length < array[i].length) {
            word = array[i]
        }
    }
    return word
}
console.log(findLongestWord("dolor sit amet consectetur adipisicing elit"))

// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.

const formatString = function (string) {
    if (string.length < 40) {
        return string
    } else {
        return string.split("").splice(0, 40).join("") + "...";
    }
}
console.log(formatString("Lorem ipsum dolor sit"))
console.log(formatString("Lorem ipsum dolor sit amet consectetur adipisicing elit"))

// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40 - ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.

// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок.Функція перевіряє її на вміст слів spam і sale.Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false.Слова в рядку можуть бути в довільному регістрі.

const checkForSpam = function (message) {
    const inputedMessage = message.toLowerCase();
    const readyMessage = message.includes("sale", "spam")
    if (readyMessage === true) {
        return readyMessage
    } else {
        return false
    }
}
console.log(checkForSpam(" lorem ipsum spam dolor sit sale amet consectetur elit"));

// Напиши скрипт з наступним функціоналом:
const numbers = []
let input = 0
do {
    input = prompt("Уводьте довільну кількість чисел, після чого натисніть cancel");
    if (input === null) {
        break;
    }
    const number = Number(input);
    if (!isNaN(number)) {
        numbers.push(number)
    } else {
        alert("Данні уведені не правильно!!!")
    }

} while (true);
let total = 0;
if (numbers.length > 0) {
    for (let i = 0; i < numbers.length; i += 1) {
        total += numbers[i]
    }
    console.log(`Загальна сума чисел дорівнює ${total}`)
}


// При завантаженні сторінки користувачеві пропонується в prompt ввести число.Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total.Використовуй цикл for або for...of.Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.


// Є масив logins з логінами користувачів.Напиши скрипт додавання логіна в масив logins.Логін, який додається повинен:

// проходити перевірку на довжину від 4 до 16 - ти символів включно
// бути унікальним, тобто бути відсутнім в масиві logins

// Розбий завдання на підзадачі за допомогою функцій.

// Напиши функцію isLoginValid(login), в якій перевір кількість символів параметра login і поверни true або false в залежності від того, чи потрапляє довжина параметра в заданий діапазон від 4 - х до 16 - ти символів включно.

// Напиши функцію isLoginUnique(allLogins, login), яка приймає список всіх логінів і логін, який додається, як параметри і перевіряє наявність login в массиве allLogins, повертає true якщо такого логіна ще немає і false якщо логін вже використовується.

// Напиши функцію addLogin(allLogins, login) яка:

// Приймає новий логін і масив всіх логінів як параметри
// Перевіряє валідність логіна використовуючи допоміжну функцію isLoginValid
// Якщо логін не валідний, припинити виконання функції addLogin і повернути радок 'Помилка! Логін повинен бути від 4 до 16 символів'
// Якщо логін валідний, функція addLogin перевіряє унікальність логіна за допомогою функції isLoginUnique
// Якщо isLoginUnique поверне false, тоді addLogin Не додає логін в массив масив і повертає рядок 'Такий логін уже використовується!'
// Якщо isLoginUnique поверне true, addLogin додає новий логін в logins і повертає рядок 'Логін успішно доданий!'

const logins = [""];
let addingPassword = "";
const isLoginValid = function (login) {
    let loginValid;
    if (login.length >= 4 && login.length <= 16) {
        loginValid = true
    } else {
        loginValid = false
    }
    return loginValid
}
const isLoginUnique = function (allLogins, login) {
    if (!allLogins.includes(login)) {
        return true
    } else {
        return false
    }
}

const addLogins = function (allLogins, login) {
    if (isLoginValid(login) === false) {
        return "Помилка! Логін повинен бути від 4 до 16 символів"
    }
    if (!isLoginUnique(allLogins)) {
        return "такий рядок уже використовується"
    } else {
        logins.push(login);
        return 'Логін успішно доданий!'
    }
}


console.log(addLogins(logins, "New password"));
