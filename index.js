// 1. Об'єднати масив у рядок

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

let string = '';

for (let i = 0; i < friends.length; i++) {
  string += friends[i];

  if (i < friends.length - 1) {
    string += ', ';
  }
}

console.log(string);

// Через join()

const string2 = friends.join(', ');
console.log(string2);


// 2. Колекція карточок

const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];


// 3. Видалення

const cardToRemove = 'Карточка-3';
const indexRemove = cards.indexOf(cardToRemove);

cards.splice(indexRemove, 1);

console.log(cards);


// 4. Додавання

const cardToInsert = 'Карточка-6';
const insertIndex = 2;

cards.splice(insertIndex, 0, cardToInsert);

console.log(cards);


// 5. Оновлення

const cardToUpdate = 'Карточка-4';
const indexUpdate = cards.indexOf(cardToUpdate);

cards.splice(indexUpdate, 1, 'Оновлена карточка');

console.log(cards);