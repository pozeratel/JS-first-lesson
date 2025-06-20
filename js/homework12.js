const user = {
    name: "Artem",
    age: "16",
    hobby: "bascketball",
    premium: true,
}
user.hobby = "skydiving";
user.mood = "happy";
user.premium = false;
const { name, age, hobby, premium, mood } = user;
const newArr = Object.entries(user);
for (const [key, values] of newArr) {
    console.log(`${key}: ${values}`);
}
// =====================================
const human = {
    name: "Artem",
    age: "16",
    hobby: "bascketball",
    premium: true,
}


function countProps(obj) {
    const propslLength = Object.keys(obj);
    return propslLength.length
}

console.log(countProps(human));

const employeesList = {
    Artem: 1,
    Yaroslav: 97,
    Bogdan: 53,
    Nikita: 23,
};

const findBestEmployee = function (employees) {
    let bestEmployee = '';
    let maxTasks = 0;

    for (const [name, task] of Object.entries(employees)) {
        if (task > maxTasks) {
            maxTasks = task;
            bestEmployee = name
        }
    }
    return bestEmployee;
}

const best = findBestEmployee(employeesList);
console.log(`Найпродуктивніший співробітник це ${best}`)

const employees = {
    Yaroslav: 7200,
    Artem: 1300,
    Bogdan: 6300,
    Nikita: 4700,
}


const countTotalSalary = function (obj) {
    let sum = 0;
    for (const [name, money] of Object.entries(obj)) {
        sum += money;
    }
    return sum
};
console.log(countTotalSalary(employees));


// ===================================



const products = [
    { name: "apple", price: 50, category: "fruits" },
    { name: "carrot", price: 20, category: "vegetables" },
    { name: "Banana", price: 30, category: "fruits" },
    { name: "Potato", price: 15, category: "vegetables" },
];

const getAllPropValues = function (arr, prop) {
    const newArr = [];

    for (const { name, price, category } of arr) {
        if (prop === "name") {
            newArr.push(name);
        } else if (prop === "price") {
            newArr.push(price);
        } else if (prop === "category") {
            newArr.push(category);
        }
    }

    return newArr;
};

console.log(getAllPropValues(products, "price"));
console.log(getAllPropValues(products, "category"));

// ===============================




const someProducts = [
    { name: "apple", price: 50, amount: 12 },
    { name: "carrot", price: 20, amount: 22 },
    { name: "Banana", price: 30, amount: 72 },
    { name: "Potato", price: 15, amount: 42 },
];

const calculateTotalPrice = function (allProducts, productName) {
    let sum = 0;
    for (const { name, price, amount } of allProducts) {
        if (name === productName) {
            sum += price * amount;
        }
    }
    return sum
};

console.log(calculateTotalPrice(someProducts, "Banana"))

const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

const account = {
    balance: 0,
    transactions: [],
    id: 1,

    createTransaction(amount, type) {
        const newTransaction = {
            id: this.id,
            type: type,
            amount: amount,
        };
        this.id += 1;
        return newTransaction;
    },

    deposit(amount) {
        this.balance += amount;
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(transaction);
        return `Успішно додано на рахунок ${amount}`;
    },

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
            this.transactions.push(transaction);
            return `Ви успішно зняли з рахунку ${amount} коштів`;
        } else {
            alert("У вас недостатньо коштів на рахунку для зняття.");
            return `На вашому балансі залишилося ${this.balance}`;
        }
    },

    getBalance() {
        return `На вашому рахунку ${this.balance} коштів`;
    },

    getTransactionDetails(id) {
        for (const transaction of this.transactions) {
            if (transaction.id === id) {
                return transaction;
            }
        }
        return "Такої транзакції не було знайдено";
    },

    getTransactionTotal(type) {
        let total = 0;
        for (const transaction of this.transactions) {
            if (transaction.type === type) {
                total += transaction.amount;
            }
        }
        return `Загальна сума за типом транзакцій "${type}": ${total}`;
    },
};