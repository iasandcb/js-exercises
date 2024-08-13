const numbers = [1, 2, 3, 4];
let sum = 0;
numbers.forEach(element => {
  sum += element;
});
console.log('sum', sum);

const sumAll = numbers.reduce(
  (accumulator, element, index, array) => {
	  console.log('accumulator', accumulator);
	  return accumulator + element;
	}
, 0 // accumulator 초기값 
);
console.log('sumAll', sum);
// 팩토리얼 4! = 1 * 2 * 3 * 4
// numbers 써서 
// for, forEach, reduce 일단 성공시키기
// reduce로 성공시키기

const fac = numbers.reduce((acc,e,i,arr) => acc * e);

const fecNumber = [1,2,3,4]
const fecNumber2= fecNumber.reduce (
    (fector, element) => {
        return fector = fector * element;
    }
    ,1
)

const facotorial = numbers.reduce(
  (accumulator, element, index, array) => {
    return accumulator * element;
  }, 1
);
console.log('factorial', facotorial);

function factorial(numbers) {
  let product = 1;
	for (number of numbers) {
	  product *= number;
	}
	return product;
}

console.log('ff', factorial(numbers));

const numbers2 = [1, 2, 3, 4];
// 각 원소를 2배씩 하고 나서 합한다.













