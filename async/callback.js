function printMessage(func) {
	console.log('Printing message...');
	func();
}

function sayHello() {
	console.log('Hello World');
}

printMessage(sayHello);

printMessage(
() => {
	console.log('Hello World');
}
);

printMessage(() => console.log('Hello World'));

