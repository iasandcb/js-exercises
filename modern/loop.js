const numbers = [1, 2, 3];
let sum = 0;
// forEach: higher order function 고차함수
numbers.forEach(
// callback
function(element, index, array) {
//	console.log(element, index, array);
	sum += element;
}
);
console.log('sum', sum);
sum = 0;
numbers.forEach(
  (_, index) => 
	{
    sum += index;	
	}
);
console.log('sum', sum);

sum = 0;
numbers.forEach(element => sum += element);
console.log('sum', sum);

// map
const twiceNumbers = numbers.map(
  element => element * 2
);

console.log('tn', twiceNumbers);
// filter

const devices = [
  {name: 'GalaxyNote', brand: 'Samsung'},
	{name: 'MacbookPro', brand: 'Apple'},
	{name: 'Gram', brand: 'LG'},
	{name: 'MacbookAir', brand: 'Apple'}
];

const apples = devices.filter(
  (element, index, array) => {
	  return element.brand === 'Apple';
	}
);

console.log('apples', apples);
























