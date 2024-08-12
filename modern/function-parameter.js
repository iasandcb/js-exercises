function sayHi(name='Codeit') {
  console.log('Hi ' + name);
}

sayHi('Alex');
sayHi();

// this function accepts a list of arguments
// variable arity
function printArguments() {
  // for each 
  for (const argument of arguments) {
	  console.log('arg', argument);
	}

	scores = [1, 2, 3, 4, 5];
	for (const score of scores) {
	}

}

function printArgumentsV2(...args) {
  for (const arg of args) {
		console.log('arg2', arg);
	}
}				

printArguments(1, 2, 3);
printArgumentsV2(1, 2, 3);

function printRankingList(first, second, ...others) {
  console.log('first', first);
	console.log('second', second);
	console.log('others', others);
	for (const other of others) {
					console.log('other', other);
	}
}

printRankingList('Alex', 'Jerry', 'Tom');












