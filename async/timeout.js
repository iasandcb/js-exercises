function sayHello(name='Who', pet) {
  console.log(`Hello ${name} with ${pet}!`);
}
console.log('시작');

setTimeout(
  sayHello,
	2000,
	'Alex', 'Mint'
);

// input func
function compose(func) {
	const result = (name, pet) =>  {
		setTimeout(func, 3000, name, pet);
	};
	// output result
  return result
}

const a = compose(sayHello);

a('Alex', 'Mint');

console.log('끝');


