const a = {name: 'Alex', age: 3};
const b = {name: {last: 'Lee', first: 'Alex'}, age: 3}
console.log('name', b.name.first + ' ' + b.name.last);
const c = {name: 'Alex', langs: ['Java', 'JS', 'Python']};
console.log('langs', c.langs);
c.langs.forEach(lang => console.log('lang', lang));
const d = [{name: 'Alex', age: 5}, {name: 'Jay', age: 10}];
d.forEach(person => console.log('name', person.name));
const e = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
e.forEach(numbers => {
	numbers.forEach(number => {
    console.log('number', number);
  }
});
