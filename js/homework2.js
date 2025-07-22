// Вивести result в консоль.Перевірити тип змінної result = 5 + 5 +’5’.
const result = 5 + 5 + "5";
console.log(result);
console.log(typeof (result));

// Створіть змінну email з вашою електронною адресою.Напишіть скрипт, який перевіряє чи містить змінна email символ @і рахує загальну кількість символів.Результат виведіть в консоль.

const email = "svobodavaha@gmail.com";
console.log(email.length);
console.log(email.includes("@"));

// Записати в окремих змінних кожне слово: My, name, is.Поєднати всі слова в змінну fullName.До змінної fullName додати ‘Viktor’. fullName вивести в консоль.

const a = "My";
const b = "name";
const c = "is";
const fullName = a + b + c;
console.log(fullName + "Victor");

// Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати.За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень»

const userName = "Ярослав";
const payment = 300;
console.log(`Дякуюємо, ${userName}е! До сплати ${payment} гривень`);