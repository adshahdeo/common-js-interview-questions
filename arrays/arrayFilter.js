// returns array elements basde on a condition
let myArr = [1,2,3,4,5,6,7,8];

let newArr = myArr.filter((i) => {
	return i%2 === 0;
});

console.log(newArr);