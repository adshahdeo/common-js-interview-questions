const flatten = function(arr, res = []) {
	const len = arr.length;
	for(let i = 0; i < len; i++) {
		const val = arr[i];
		if(Array.isArray(val)) {
			flatten(val, res);
		} else {
			res.push(val);
		}
	}

	return res;
}

var arr = [1,2,[3,[4,[5,6,[[[[9]], 23], 10, 12], 34, 44], 55], 0]];

var flat = flatten(arr);
console.log(flat);