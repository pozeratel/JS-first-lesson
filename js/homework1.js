// Створити змінні celsius, fahrenheit для зберігання температури за Цельсієм та Фаренгейтом.Перевести температуру з Цельсія у Фаренгейти за допомогою формули та вивести результат в консоль.

const celsius = 23;
const fahrenheit = (celsius * 9 / 5) + 32;
console.log(fahrenheit)

// Створити змінну daysInMonth для зберігання кількості днів у місяці.Обчислити кількість hoursInMonth годин та minutesInMonth хвилин у цьому місяці за допомогою оператора множення та вивести результат в консоль.

const daysInMonth = 30;
console.log(daysInMonth + "days");
const hoursInMonth = daysInMonth * 24;
console.log(hoursInMonth + "hours");
const minutesInMonth = hoursInMonth * 60;
console.log(minutesInMonth + "minutes");

// Створити змінні health, energy для зберігання рівня здоров'я та енергії гравця в грі. Зменшити рівень здоров'я та енергії гравця за допомогою операторів віднімання та вивести результат в консоль.

const health = 100;
const energy = 100;
console.log(health - 30 + " " + "HP");
console.log(energy - 10 + " " + "Energy");

// Створити змінну totalPrice для зберігання суми покупки в магазині.Застосувати знижку discount в розмірі 10 % до цієї суми за допомогою оператора множення.Результат зберегти в змінній discountedPrice та вивести результат в консоль.

const totalPrice = 300;
const discount = 0.10;
const discountedPrice = totalPrice * (1 - discount);
console.log(discountedPrice);

// Створити змінну const floatNumber = 12.78 для зберігання числа з плаваючою комою.Використати метод Math.floor() для округлення числа до меншого.Результат зберегти в змінній roundedDown та вивести результат в консоль.

const floatNumber = 12.78;

const roundedDown = Math.floor(floatNumber);
console.log(roundedDown);

// Створити змінну const intString = "123" для зберігання рядка, який містить ціле число.Використати метод parseInt() для перетворення рядка у ціле число.Результат зберегти в змінній parsedIntта вивести результат в консоль.

const intString = "123";
const parsedInt = parseInt(intString);
console.log(parsedInt);

// Створити змінну number для зберігання числа.Використати метод Math.sqrt() для обчислення квадратного кореня числа.Результат зберегти в змінній sqrtNumber та вивести результат в консоль.

const number = 52;
const sqrtNumber = Math.sqrt(number);
console.log((sqrtNumber).toFixed(2));


// Створити змінні const integer = 42 та const stringNumber = "256" для зберігання цілочисельного значення та рядка з числом у вигляді рядка.Використати метод parseInt() для перетворення рядка у ціле число.Результат зберегти в змінній convertedInt та вивести результат в консоль.Потім використати метод toString() для перетворення цілочисельного значення у рядок.Результат зберегти в змінній convertedString та вивести результат в консоль.

const intager = 42;
const stringNumber = "256";
const convertedInt = parseInt(stringNumber);
console.log(convertedInt);
const convertedString = intager.toString();
console.log(convertedString);