function printCatName(user) {
	console.log('AND', user.cat && user.cat.name);
	console.log('OC impl', user.cat === null || user.cat === undefined ? undefined : user.cat.name);
	console.log('OC', user.cat?.name);
}

const user1 = {
	name: 'Alex',
	cat: {
		name: 'Crew',
		breed: 'British Shortair'
	}
}

printCatName(user1);

const user2 = {
	name: 'Jay',
	cat: null
}
console.log(user2.cat);
printCatName(user2);
// pre-condition 1.
//if (user2.cat) {
//  printCatName(user2);
//}

// 2.
//try {
//  printCatName(user2);
//} catch (e) {
//}
