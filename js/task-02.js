const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const Array = [];

ingredients.forEach(ingredient => {
  const item = document.createElement('li')
  item.className = 'item'
  item.textContent = ingredient

  Array.push(item)


})

list.append(...Array);