// Створити масив з трьох чисел.Змінити значення другого елемента масиву на 10
const numbers = [1, 2, 4];
console.log(numbers);
numbers[1] = 10;
console.log(numbers[1]);

// Створити масив із трьох рядків.Додати до масиву ще одну рядків.
const someText = ["lorem", "ipsum", "dolor"];
console.log(someText);
someText[3] = "amet";
console.log(someText);

// Створити скрипт який поверне суму всіх чисел в масиві.
const araySum = [1, 2, 3, 4, 14, 234];
let someSum = 0;
for (const sum of araySum) {
    someSum += sum;
}
console.log(someSum);

// Створити масив з 5 - ти чисел.Вивести на екран всі елементи масиву за допомогою циклу for.
const fiveNumbers = [1, 23, 14, 35, 22];
for (let i = 0; i < fiveNumbers.length; i += 1) {
    console.log(fiveNumbers[i]);
}

// Створити масив із 5 - ти рядків.Вивести на екран кожен рядокз масиву, який містить більше 5 - ти символів.

const fiveText = ["loremu", "ipsu", "dolor", "ametet", "or"];
for (let i = 0; i < fiveText.length; i += 1) {
    if (fiveText[i].length > 5) {
        console.log(fiveText[i])
    }
}

// Створити масив з 10 - ти чисел.Знайти та вивести на екран максимальне значення з масиву.
const maxNumber = [1, 16, 23, 25, 66, 124, 8, 24, 88, 400];
let maxArrNumber = maxNumber[0];
for (let i = 1; i < maxNumber.length; i += 2) {
    if (maxNumber[i] > maxArrNumber) {
        maxArrNumber = maxNumber[i];
    }
}
console.log(`Максимальне число це ${maxArrNumber}`);

// Створити масив з 10 - ти чисел.Знайти всі парні числа в масиві та вивести їх на екран.
const evenNumbers = [1, 16, 23, 25, 66, 124, 8, 24, 88, 400];
for (let i = 0; i < evenNumbers.length; i += 1) {
    if (evenNumbers[i] % 2 === 0) {
        console.log(evenNumbers[i]);
    } else {
        continue;
    }
}
