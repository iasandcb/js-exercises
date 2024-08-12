function sayHi() {
				console.log('this in function', this);
}

// sayHi();

const user = {
				firstName: 'Tess',
				lastName: 'Jang',
				getFullName: function() {
					return `${this.lastName} ${this.firstName}`;
				}
}

console.log(user.getFullName());

console.log('this original', this);

const user2 = {
  firstName: 'Alex',
	lastName: 'Lee',
	getFullName: () => {
	  console.log('this only', this);
	  return `${this.lastName} ${this.firstName}`;
	}
}

console.log(user2.getFullName());

console.log('---------------------');

// 일반 기명 함수로 선언
function printThis() {
				console.log(this.content);
}

const myObj = {
				content: 'Alex Lee',
				printContent: printThis
}
// myObj.content myObject의 content 속성
// myObj.printContent myObject의 printContent 메소드

console.log(myObj);
// runtime, who xxx (xxx.yyyy) calls this method?
// myObj.printContent();

const otherObj = {
				content: 'Codeit',
				age: 7,
				printContent: printThis
}

otherObj.printContent();





















