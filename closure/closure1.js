let add = function(param1) {

	let addAgain = function(param2) {
		return param1 + param2;
	}

	return addAgain;
}

let addOne = add(1);
let addTwo = add(2);

console.log(add(1)(2));

console.log(addOne(2));
console.log(addTwo(3));