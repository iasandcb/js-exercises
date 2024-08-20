function printMessageWithParams(func, name) {
	console.log('Printing message...');
	func(name);
}

function sayHello(name) {
	console.log(`Hello ${name}!`);
}

printMessageWithParams(sayHello, 'Alex');
// use arrow function
printMessageWithParams(
(name) => {
	console.log(`Hello ${name}!`);
}
,
'Alex'
);

printMessageWithParams(name => console.log(`Hello ${name}`), 'Alex');
