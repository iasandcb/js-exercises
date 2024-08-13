const members = new Set();

members.add('Jay');
members.add('Kay');
members.add('El');

console.log(members.has('El'));
console.log(members.has('Jason'));

console.log(members.size);

// 집합은 인덱스 개념이 없다.
members.delete('El');
console.log(members.size);

//members.clear();
// console.log(members.size);

for (const member of members) {
  console.log(member);
}

members.forEach(member => {
  console.log(member);
});

const numbers = [1, 3, 4, 3,3,3,3, 5, 2, 1, 4];
console.log('numbers', numbers);
const uniqueNumbers = new Set(numbers);
console.log('uN', uniqueNumbers);

