// 반목문을 만들자. 5번 반복.
// ( 인덱스 변수 선언 및 초기화; 반복 조건; 인덱스 변수 갱신)
let sum = 0;
const i = 0;
for (let i = 1; i <= 5; i++) {
				console.log('i', i);
				sum += i;
				if (i > 3) {
							//	console.log('j first', j);
								let j = true;
								console.log('j', j);
				}
				//console.log('j again', j);
}
console.log('i again', i);
console.log('sum', sum);
for (let i = 0; i < 10; i++) {
				console.log('i2', i);
}

let data = [1, 2];

const checkLogic = e => e > 2;
const checkData = data.some(checkLogic);

console.log('checkData', checkData);

function addItem(newItem) {
	data.push(newItem);
	const checkDataNewItem = data.some(checkLogic);
	console.log('data after adding an item', data);
	console.log('checkDataNewItem', checkDataNewItem);
}

addItem(3);

console.log('checkData again', checkData);
