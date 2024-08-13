const cutOff = 80;

const passChecker = (score) => {
	if (score > cutOff) {
		return 'Pass!';
	}	else {
		return 'Fail!';
	}
};

console.log(typeof passChecker);
console.log(passChecker(75));

const passChecker2 = (score) => {
	return score > cutOff ? 'Pass!' : 'Fail!';
}
console.log(passChecker2(75));

const passChecker3 = (score) => score > cutOff ? 'Pass!' : 'Fail!'; 
console.log(passChecker3(75));
const passChecker4 = score => score > cutOff ? 'Pass!' : 'Fail!';
console.log(passChecker4(75));
