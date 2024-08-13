const numbers = [1, 10, 4, 21, 36000];

// deep copy
const dup = numbers.slice();
numbers.sort(
  function(a, b) {
	  return a - b;
	}
);
// mutable
console.log('numbers', numbers);
console.log('dup', dup);

numbers.sort((a, b) => b - a);
console.log('numbers', numbers);

const letters = ['a', 'c', 'b'];
// mutable
letters.reverse();
console.log('letters', letters);
