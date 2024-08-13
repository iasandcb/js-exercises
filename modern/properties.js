const user = {
				name: 'Alex',
				age: 3 
};
console.log('user name', user.name);
console.log('user [name]', user['name']);

const name = 'Alex';
const age = 3;

const user2 = {
				name: name,
				age: age
};
// New!
console.log('user2', user2);

const user3 = {
				name,
        age
};

console.log('user3', user3);

const user4 = {
				firstName: 'Alex',
				lastName: 'Lee',
				getFullName: function() {
					return `${this.firstName} ${this.lastName}`;
				}
};

console.log('user4 full name', user4.getFullName());

const user5 = {
				firstName: 'Alex',
				lastName: 'Lee',
				getFullName() {
					return `${this.firstName} ${this.lastName}`;
				}
};

console.log('user5 full name', user5.getFullName());

const propertyName = 'birth';
const getJob = () => 'job';

const codeit = {
				['topic' + 'name']: 'Modern JS',
				[propertyName]: 2017,
				[getJob()]: 'Lecturer'
};

console.log('codeit', codeit);













