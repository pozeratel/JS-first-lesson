// Напиши скрипт в якому є три радіобатони зі значенями кольрів.При обиранніна будь якого колір фону боді змінюється відповідно\

const radioButtonsRef = document.querySelectorAll('[type = "radio"] ')
const radioCheckedRef = document.querySelector("[checked]");

radioButtonsRef.forEach(input => {
    input.addEventListener("change", onInputChange);
})

function onInputChange(event) {
    const bgColor = event.target.value
    document.body.style.backgroundColor = bgColor;
}

document.body.style.backgroundColor = radioCheckedRef.value


// Напиши скрипт який, при наборі тексту в інпут input#name - input(подія input), підставляє його поточне значення в span#name - output.якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.

const inputNameRef = document.getElementById("name-input");
const spanRef = document.getElementById("name-output");

inputNameRef.addEventListener("input", onInput);
function onInput(event) {
    const inputValue = event.target.value;
    spanRef.textContent = inputValue;
    if (inputNameRef.value === '') {
        spanRef.textContent = "Незнайомець"
    }
}

// Напиши скрипт, який би при втраті фокуса на інпут, перевіряв його вміст на правильну кількість символів.
// Скільки символів має бути в інпут, вказується в його атрибуті data - length.
// Якщо введена відповідна кількість, то border інпут стає зеленим, якщо неправильне - червоним.
// Для додавання стилів, використовуй CSS - класи valid і invalid.

const inputvalidationRef = document.querySelector("#validation-input");

const requairedValue = Number(inputvalidationRef.dataset.length)

inputvalidationRef.addEventListener("blur", onInputBlur);
function onInputBlur(event) {

    const currentValue = event.target.value.length
    console.log(currentValue)

    inputvalidationRef.classList.remove("valid", "invalid")
    if (currentValue === requairedValue) {
        inputvalidationRef.classList.add("valid");
    } else {
        inputvalidationRef.classList.add("invalid");
    }
}


// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input) і змінює інлайн - стиль span#text оновлюючи властивість font - size.В результаті при перетягуванні повзунка змінюватиметься розмір тексту.

const inputSizeRef = document.querySelector("#font-size-control");
const spanTextRef = document.querySelector("#text")

inputSizeRef.addEventListener("input", onSizeInput);

function onSizeInput(event) {
    const size = event.target.value + "px"
    spanTextRef.style.fontSize = size;
}