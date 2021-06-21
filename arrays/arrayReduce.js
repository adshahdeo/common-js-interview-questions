// converts array into single value, reads from left
let myArr = [1,2,3,4,5,6,7,8];

let sum = myArr.reduce((total, current) => {
	return total + current;
}, -10);

console.log(sum);