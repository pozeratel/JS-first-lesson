// Створіть функцію processArray(array, callback), яка приймає масив та функцію - колбек.Викличте processArray з різними масивами та функціями - колбеками, щоб виконати наступні операції:
// Порахувати суму всіх елементів масиву.
// Знайти мінімальний елемент масиву.
// Знайти максимальний елемент масиву.
// Перепишіть колбек - функції на стрілки


const processArray = (array, callback) => {
    return callback(array);
};
const getSum = (arr) => arr.reduce((acc, curr) => acc + curr);
const getMin = (arr) => Math.min(...arr);
const getMax = (arr) => Math.max(...arr);
console.log(processArray([54, 1, 4, 23, 2, 5, 2, 5], getMin))
console.log(processArray([54, 1, 4, 23, 2, 5, 2, 5], getMax))
console.log(processArray([54, 1, 4, 23, 2, 5, 2, 5], getSum))


//     .Створіть функцію operate(a, b, callback), яка приймає два числа та колбек для виконання операції над ними.Використайте її для виконання наступних операцій:

// Додавання.
//     Віднімання.
//     Множення.
//     Ділення.
// Перепишіть колбеки на стрілкові функції


const operate = (a, b, callback) => {
    return callback(a, b);
};

// Виклик функції з різними операціями

const minus = (a, b) => a - b;
const plus = (a, b) => a + b;
const multy = (a, b) => a * b;
const division = (a, b) => a / b;
console.log(operate(10, 5, minus)); // Віднімання
console.log(operate(10, 5, plus)); // Додавання
console.log(operate(10, 5, multy)); // Множення
console.log(operate(10, 5, division)); // Ділення

