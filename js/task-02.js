const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newElPotatoes = document.createElement('li')
newElPotatoes.textContent = 'Potatoes'
newElPotatoes.classList.add('item')
document.body.append(newElPotatoes)

const newElMushrooms = document.createElement('li')
newElMushrooms.textContent = 'Mushrooms'
newElMushrooms.classList.add('item')
document.body.append(newElMushrooms)

const newElGarlic = document.createElement('li')
newElGarlic.textContent = 'Garlic'
newElGarlic.classList.add('item')
document.body.append(newElGarlic)

const newElTomatos = document.createElement('li')
newElTomatos.textContent = 'Tomatos'
newElTomatos.classList.add('item')
document.body.append(newElTomatos)

const newElHerbs = document.createElement('li')
newElHerbs.textContent = 'Herbs'
newElHerbs.classList.add('item')
document.body.append(newElHerbs)

const newElCondiments = document.createElement('li')
newElCondiments.textContent = 'Condiments'
newElCondiments.classList.add('item')
document.body.append(newElCondiments)