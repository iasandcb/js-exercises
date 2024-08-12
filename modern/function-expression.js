const a = 3;
const b = {name: 'Alex'};
const c = function(name) {
	console.log('Hello ' + name);
};
console.log('c', c);
c('Alex');

const d = {age: 3, name: 'Alex',
  hobby: function() {
					console.log('Elden ring');
	}
};

console.log('d', d.name, d.age);
d.hobby();

// 함수 선언
function myFunction() {
				// 함수 표현식
  return function() {
	  console.log('Hi?');
	}
}
const f = myFunction();
console.log('f', f);
f();
