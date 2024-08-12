const a = function() {
				console.log('hello');
}
a();
// function () -> () =>
const b = () => {
				console.log('hello');
}
b();

const c = number => {
  return number * 2;
}

console.log('c(2)', c(2));

const cv2 = number => number * 2;

const d = (a, b) => {
				let z = 4;
				return a + b;
}

const e = (a, b) => a + b;
console.log('e(1, 2)', e(1, 2));
// Immediately Invoked Function Expression
(() => {
				console.log('Hi');
})()
