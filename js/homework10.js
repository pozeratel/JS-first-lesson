// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку.Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму.Після проведення операції виводити повідомлення про залишок на рахунку.

const bankAccount = {
    ownerName: "",
    accountNumber: "2025060412",
    balanse: 1000,

    deposit(amount) {
        this.balanse += amount
        return `Ви успішно поклали на рахунок ${amount}$, ваш баланс складає ${this.balanse}$`
    },

    withDraw(amount) {
        if (this.balanse >= 0) {
            return this.balanse -= amount
        } else {
            return `У вас не достатньо коштів на рахунку`
        }
    }
};

if (confirm("чи бажаєте попонити рахунок?")) {
    const amount = parseFloat(prompt("Уведіть суму поповнення"));
    if (!isNaN(amount) && amount > 0) {
        bankAccount.deposit(amount)
    } else {
        alert("Не коректно уведені данні")
    }
} else if (confirm("чи бажаєте ви зняти гроші")) {
    const amount = parseFloat(prompt("Уведіть суму для зняття"));
    if (!isNaN(amount) && amount > 0) {
        bankAccount.withDraw(amount);
    }
    else {
        alert("Не коректно уведені дані");
    }
}

console.log(bankAccount);


// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія.Температуру потрібно отримати з prompt().Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки

const weather = {
    temperature: "",
    humidity: "20%",
    windSpeed: "35 km/s",
    showTemperature() {
        return this.temperature < 0
    },
}

const input = prompt("Яка у вас температура?");
const parsedInput = parseFloat(input);
if (!isNaN(parsedInput)) {
    weather.temperature = parsedInput;
    if (weather.showTemperature()) {
        console.log("Температура нижче 0 градусів");
    } else {
        console.log("Температура вище 0 градусів")
    }
} else {
    console.log("Данні уведен не вірно")
}


// Створіть об’єкт "user", який буде мати властивості "name", "email", "password".Додайте метод "login", який буде перевіряти правильність введеного email та password.

const user = {
    name: "Artem",
    email: "",
    password: "",

    login(logPassword, logEmail) {
        if (logPassword === this.password && logEmail === this.email) {
            return "Успішний вхід в систему";
        } else {
            return "Вхід не виконано, данні уведені не вірно"
        }
    },
}

const logIn = confirm("бажаєте зареєструватися?");
if (logIn === true) {
    const regEmail = prompt("Уведіть пошту");
    const regPassword = prompt("Уведіть пароль (мінімум 8 символів)");

    const emailIsValid = regEmail.includes("@") && (regEmail.includes(".com") || regEmail.includes(".net"));
    const passwordIsValid = regPassword.length >= 8;

    if (!emailIsValid) {
        alert("Пошта уведена некоректно.");
    }

    if (!passwordIsValid) {
        alert("Пароль повинен бути не менше 8 символів.");
    }

    if (emailIsValid && passwordIsValid) {
        user.email = regEmail;
        user.password = regPassword;
        alert("Реєстрація пройшла успішно!");
    } else {
        alert("вхід не вдалий")
    };
}



// Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче.Вивести значення властивостей в консоль.

const movie = {
    title: "Аватар",
    director: "Джеймс Кемерон",
    year: "2009",
    rating: "8.8",

    isFamous(rating) {
        return this.rating > 8
    },
}

console.log("Назва:", movie.title);
console.log("Режисер:", movie.director);
console.log("Рік випуску:", movie.year);
console.log("Рейтинг:", movie.rating);
console.log(movie.isFamous()); 