const devices = [
  {name: 'GalaxyNote', brand: 'Samsung'},
	{name: 'MacbookPro', brand: 'Apple'},
	{name: 'Gram', brand: 'LG'},
	{name: 'MacbookAir', brand: 'Apple'}
];

const myLaptop = devices.find(
  (element, index, array) => {
	  console.log('index', index);
	  return element.brand === 'Apple';
	}
);

console.log('mine', myLaptop);

const numbers = [6, 6, 6, 7, 9];

const someReturn = numbers.some((element, index, array) => {
  console.log('index', index);
  return element > 5;
});
console.log('some', someReturn);

const everyReturn = numbers.every((element, index, array) => {
  console.log('index', index);
	return element > 5;
});
console.log('every', everyReturn);
