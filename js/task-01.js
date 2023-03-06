const allItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${allItems.length}`);
//=========================================================

const categorys = document.querySelectorAll('.item');
Array.prototype.forEach.call(categorys, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const categorysLength = element.querySelectorAll('li').length;
    console.log(`Category: ${title} / Elements: ${categorysLength}`);
});