// Створити розмітку з кнопкою та текстовим полем.За допомогою JavaScript отримати доступ до кнопки та текстового поля за їх ідентифікаторами та змінити текст на кнопці на значення текстового поля.

const firstInputRef = document.querySelector("#input-first");
const firstButtonRef = document.querySelector("#button-first")

const textReplace = firstButtonRef.textContent = firstInputRef.value
console.log(textReplace)

// Створити розмітку з заголовком та зображенням.За допомогою JavaScript отримати доступ до зображення та змінити значення атрибута "src" на шлях до іншого зображення.

const titleRef = document.querySelector("h1");
const imgRef = document.querySelector("h1 + img");
imgRef.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd85Hls8xwck6cr3cvTnA_Ylrk7I3arXgQBQ&s";

// Створити розмітку з посиланням та зображенням.За допомогою JavaScript отримати доступ до посилання та змінити значення атрибута "href" на нову URL - адресу.Також отримати доступ до зображення та додати новий атрибут "alt" з описом зображення.

const linkRef = document.querySelector("a");
const secondImgRef = document.querySelector("a + img");
secondImgRef.alt = "new Alt";
linkRef.src = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide";


// Створити розмітку зі списком елементів.За допомогою JavaScript отримати доступ до першого елемента списку та змінити його вміст на новий текст.

const listRef = document.querySelector("ul");
const itemRef = listRef.querySelector("li");
itemRef.firstElementChild.textContent = "New text";
