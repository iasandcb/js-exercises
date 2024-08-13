const codeit = new Map();

codeit.set('title', 'Inside out 2');
codeit.set(2017, '...');
console.log('codeit', codeit);

console.log('codeit 2017 key', codeit.get(2017));

console.log(codeit.has('title'));
console.log(codeit.has('name'));

console.log(codeit.size);

codeit.delete('title');
console.log(codeit.get('title'));

