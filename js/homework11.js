// Напиши скрипт, який, для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of


const user = {
    name: "Artem",
    age: "16",
    hobby: "bascketball",
    premium: true,
}
user.hobby = "skydiving";
user.mood = "happy";
user.premium = false;
for (const keys in user) {
    console.log(keys + ":" + user[keys]);
}


// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.

const human = {
    name: "Artem",
    age: "16",
    hobby: "bascketball",
    premium: true,
}


function countProps(obj) {
    return Object.keys(obj).length;
}

console.log(countProps(human));

// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого(який виконав більше всіх задач).Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

const employeesList = {
    Artem: 1,
    Yaroslav: 97,
    Bogdan: 53,
    Nikita: 23,
};

const findBestEmployee = function (employees) {
    let bestEmployee = '';
    let maxTasks = 0;

    for (const name in employees) {
        if (employees[name] > maxTasks) {
            maxTasks = employees[name];
            bestEmployee = name
        }
    }
    return bestEmployee;
}

const best = findBestEmployee(employeesList);
console.log(`Найпродуктивніший співробітник це ${best}`)



// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я": "зарплата".

// const employees = {
//     Yaroslav: 7200,
//     Artem: 1300,
//     Bogdan: 6300,
//     Nikita: 4700,
// }


// const countTotalSalary = function (obj) {
//     let sum = 0;
//     for (const item in obj) {
//         sum += obj[item];
//     }
//     return sum
// };
// console.log(countTotalSalary(employees));

// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості.Повертає масив значень певної властивості prop з кожного об'єкта в масиві.


const products = [
    { name: "apple", price: 50, category: "fruits" },
    { name: "carrot", price: 20, category: "vegetables" },
    { name: "Banana", price: 30, category: "fruits" },
    { name: "Potato", price: 15, category: "vegetables" },
];

const getAllPropValues = function (arr, prop) {
    const newArr = [];
    for (const item of arr) {
        if (prop in item) {
            newArr.push(item[prop])
        }
    }

    return newArr;
}

console.log(getAllPropValues(products, "price"));
console.log(getAllPropValues(products, "category"));

// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту(значення властивості name).Повертає загальну вартість продукту(ціна * кількість).
// Викличи функції для перевірки працездатності твоєї реалізації.
const someProducts = [
    { name: "apple", price: 50, amount: 12 },
    { name: "carrot", price: 20, amount: 22 },
    { name: "Banana", price: 30, amount: 72 },
    { name: "Potato", price: 15, amount: 42 },
];

const calculateTotalPrice = function (allProducts, productName) {
    let sum = 0;
    for (const number of allProducts) {
        if (number.name === productName) {
            sum += number.price * number.amount;
        }
    }
    return sum
};

console.log(calculateTotalPrice(someProducts, "Banana"))