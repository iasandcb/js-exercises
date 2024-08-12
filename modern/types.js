const n = 1; // number
console.log('number', n);
const s = 'Hello World' // string
console.log('string', s);
const b = true; // boolean
console.log('boolean', b);
const m = null;
console.log('null', m);
const p = undefined;
console.log('undefined', p);
const a = [1, 2, 3]; // array
console.log('array', a);
let a1 = a[1]; // index 1
console.log('array index 1', a1);
a[1] = 4; 
console.log('array index 1 again', a1);
console.log('array index 1 directly', a[1]);
const o = {name: 'Alex Lee', age: 1, smoking: false};
console.log('object', o);

const bigInt = 9007199254740993n;
console.log('BigInt', bigInt);
const i2 = 9007199254740995;
console.log('int', i2);

const user = Symbol();
const user2 = user;
console.log('comparison', user === user2);
