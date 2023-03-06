const allItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${allItems.length}`);
//=========================================================

const arrayTitlesCategoriesRef = document.querySelectorAll('h2');
arrayTitlesCategoriesRef.forEach((title) => {
  console.log('Category:', title.textContent);
  console.log('Elements:', title.nextElementSibling.children.length);
});