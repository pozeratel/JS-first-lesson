const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "";
for (let i = 0; i < friends.length; i += 1) {
    string += friends[i];
    if (i < friends.length - 1) {
        string += ", "
    }
}
console.log(string);

string = friends.splice(",").join(",  ")
console.log(string);

// завдання два

const cards = ["Карточка - 1", "Карточка - 2", "Карточка - 3", "Карточка - 4", "Карточка - 5"];
const cardToRemove = cards.indexOf("Карточка - 3")
cards.splice(cardToRemove, 1);
console.log(cards);

// завдання 3
const cardToInsert = "Карточка - 6";
const lastIndex = cards.indexOf("Карточка - 5");
cards.splice(lastIndex + 1, 0, cardToInsert)
console.log(cards);

// завдання 4
const cardsToUpdate = " Нова Карточка - 4";
const cardOnesIndex = cards.indexOf("Карточка - 4");
cards.splice(lastIndex - 1, 1, cardsToUpdate)
console.log(cards)
