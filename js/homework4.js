// Створіть змінну, що симулює вибір варіанта зі списку.Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік".Використайте switch

let drink = "";
const chooseDrink = alert("Виберіть щось з поданих напоїв: Кава Чай Сік");
const orderDrink = prompt("Впишіть вибраний напій").toLowerCase();
switch (orderDrink) {
    case "кава":
        drink = orderDrink;
        break;
    case "чай":
        drink = orderDrink;
        break;
    case "сік":
        drink = orderDrink;
        break;

    default:
        console.log("Такого напою немає")
        break;
}

console.log(drink);


// Створіть змінну для зберігання введеного рядка, який може бути днем тижня.Якщо це робочий день — виведіть повідомлення про робочий день, якщо вихідний — про вихідний.

let choosenDay = "";
const day = prompt("Напишіть будь-який день тижня").toLowerCase();
if (day === "понеділок" || day === "вівторок" || day === "середа" || day === "четвер" || day === "п'ятниця") {
    choosenDay = `Це робочий день`;
} else if (day === "субота" || day === "неділя") {
    choosenDay = `Це вихідний`;
} else {
    console.log("Такого дня тижня немає");
}
console.log(choosenDay);

// Створіть змінну для зберігання номера місяця.За номером місяця визначайте пору року і виводьте відповідне повідомлення.

let monthNumber = "";
const number = Number(prompt("Уведіть номер будь-якого місяця"));
if (number === 1 || number === 2 || number === 12) {
    monthNumber = "зима";
} else if (number >= 3 && number <= 5) {
    monthNumber = "Весна";
} else if (number >= 6 && number <= 8) {
    monthNumber = "Літо";
} else if (number >= 9 && number <= 11) {
    monthNumber = "Осінь";
} else {
    console.log("Такого місяця не знайдено");
}
console.log(monthNumber);

// Створіть змінну для зберігання назви кольору.Виводьте повідомлення відповідно до вибраного кольору: якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".

let color = "";
const signal = prompt("Виберіть один з поданих кольорів і впишіть в поле - черовний зелений жовтий").trim().toLowerCase();
switch (signal) {
    case "червоний":
        color = "стоп";
        break;
    case "зелений":
        color = "йти";
        break;
    case "жовтий":
        color = "чекати";
        break;
    default: console.log("Колір що ви вибрали відсутній")
        break;
}
console.log(color);

// Створіть змінні для зберігання двох чисел та оператора(як у списку select).Виконайте відповідну операцію та виведіть результат.У випадку ділення на нуль — виведіть попередження.

let sum = "";
const firstNumber = Number(prompt("Уведіть будь-яке число"));
const secondNumber = Number(prompt("Уведіть ще одне будь-яке число"));
const operation = prompt("Виберіть будь яку дію з поданих і уведіть у поле * / + - ").trim();
if (operation === "+") {
    sum = firstNumber + secondNumber;
} else if (operation === "-") {
    sum = firstNumber - secondNumber;
} else if (operation === "*") {
    sum = firstNumber * secondNumber;
} else if (operation === "/") {
    sum = firstNumber / secondNumber;
} else {
    console.log("Дані уведені не првильно");
}
console.log(sum);