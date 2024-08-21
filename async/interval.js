// stopwatch

let counter = 0;
const intervalId = setInterval(() => {
	counter += 1;
	console.log('counter', counter);
	console.log('now', new Date());
}, 1000);

setTimeout(() => clearInterval(intervalId), 5000);
