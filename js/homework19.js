// window.addEventListener("keydown", onKeyboardClick);
// function onKeyboardClick(event) {
//     console.log(event.key)
// }
// ArrowRight
// ArrowLeft

const galleryListRef = document.querySelector(".gallery");

document.addEventListener("keydown", (elem) => {
    if (elem.key === "ArrowRight") {
        galleryListRef.scrollBy({ right: 300, behavior: "smooth" });
    }
    if (elem.key === "ArrowLeft") {
        galleryListRef.scrollBy({ right: -300, behavior: "smooth" });
    }
})

// Напиши скрипт створення і очищення колекції елементів.Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція.При натисканні на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає 1 параметр amount — число.Функція створює стільки div, скільки вказано в amount і додає їх в div#boxes.
// Кожен створений div:
// Має випадковий rgb колір фону
// Розміри найпершого div — 30px на 30px
// Кожен наступний div після першого, повинен бути ширше і вище попереднього на 10px
// Створи функцію destroyBoxes(), яка очищає div#boxes.

const controlsDivRef = document.querySelector("#controls");
const inputControlRef = controlsDivRef.querySelector("input")
const addButtonRef = controlsDivRef.querySelector('[data-action = "render"]');
const cleenButtonRef = controlsDivRef.querySelector('[data-action="destroy"]')
console.log(cleenButtonRef)
const boxesDivRef = document.querySelector("#boxes");

function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, 
              ${Math.floor(Math.random() * 256)}, 
              ${Math.floor(Math.random() * 256)})`;
}

function createBoxes(amount) {
    const elements = [];
    let size = 30; // початковий розмір

    for (let i = 0; i < amount; i += 1) {
        const div = document.createElement('div');
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.backgroundColor = getRandomColor();
        div.style.margin = '5px';
        elements.push(div);
        size += 10; // збільшуємо розмір на 10px
    }

    boxesDivRef.append(...elements);
}

function destroyBoxes() {
    boxesDivRef.innerHTML = '';
}

addButtonRef.addEventListener('click', () => {
    const amount = Number(inputControlRef.value);
    if (amount > 0) {
        createBoxes(amount);
    }
});

cleenButtonRef.addEventListener('click', destroyBoxes);