// Створіть дві змінні для зберігання значень двох текстових полів.Перевірте, чи обидві змінні не є порожніми.Якщо обидва поля заповнені, вивести повідомлення "Обидва поля заповнені", якщо ні — "Не всі поля заповнені".

let message;
const firstMessage = prompt("Уведіть будь-яке текстове повідомлення");
const secondMessage = prompt("Уведіть ще раз будь-яке текстове повідомлення");

if (Boolean(firstMessage) === true && Boolean(secondMessage) === true) {
    message = "Обидва поля заповнені";
} else {
    message = "Не всі поля заповнені"
}
console.log(message);

// Створіть дві змінні для зберігання числових значень.Обчисліть їх суму.Якщо сума більше 10 — виведіть "Сума більша за 10", якщо ні — "Сума менша або дорівнює 10".


let numberMessage;
const firstNumber = Number(prompt("Уведіть будь-яке число"));
const secondNumber = Number(prompt("Уведіть ще одне число"));

if ((firstNumber + secondNumber) > 10) {
    numberMessage = "Сума більша за 10";
} else if ((firstNumber + secondNumber) <= 10) {
    numberMessage = "Сума менша або дорівнює 10"
} else {
    console.log("Дані уведені не правильно");
}
console.log(numberMessage);

// Створіть змінну для зберігання тексту.Перевірте, чи містить цей текст слово "JavaScript".Якщо містить, виведіть "Текст містить слово JavaScript", якщо ні — "Текст не містить слово JavaScript".

let text;
const textMessage = String(prompt("Уведіть текст")).toUpperCase();
if (textMessage !== null && textMessage.includes("JAVASCRIPT")) {
    text = "Текст містить слово Javascript";
} else {
    text = "Текст не містить слово JavaScript";
}
console.log(text);

// Створіть змінну для зберігання числа.Перевірте, чи це число більше 10 і менше 20. Якщо так — виведіть "Число входить в діапазон від 10 до 20", якщо ні — "Число не входить в діапазон від 10 до 20".

let number;
const userNumber = Number(prompt("Уведіть одне число"));
if (userNumber > 10 && userNumber < 20) {
    number = "Число входить в діапазон від 10 до 20";
} else if (userNumber > 20) {
    number = "Число не входить в діапазон від 10 до 20"
} else {
    console.log("Дані уведені не вірно");
}
console.log(number);

// Створіть змінні для зберігання значень полів(ім'я, email, пароль). Перевірте, чи ім'я містить не менше 3 символів, чи email містить символ @та крапку після нього, а пароль не менше 6 символів.Якщо всі умови виконані — виведіть "Перенаправлення на іншу сторінку", якщо ні — "Помилка: неправильне заповнення".

let data;
const userName = prompt("Уведіть ваше ім'я");
const userEmail = prompt("Уведіть вашу пошту");
const userPassword = prompt("Уведіть ваш пароль");
if (userName.length > 3 && userEmail.includes("@.") && userPassword.length > 6) {
    data = "Перенаправлення на іншу сторінку";
} else {
    data = "Помилка: неправильне заповнення";
}
console.log(data);

