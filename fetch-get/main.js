const res1 = await fetch('https://learn.codeit.kr/api/avatars');
const json1 = await res1.json();
console.log(json1);

const res2 = await fetch('https://learn.codeit.kr/api/avatars?offset=5&limit=10');
const json2 = await res2.json();
console.log(json2);

const res3 = await fetch('https://learn.codeit.kr/api/avatars/7');
const json3 = await res3.json();
console.log(json3);

