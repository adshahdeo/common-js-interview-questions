let arr = [2, 3, 23, 35, 5, 1, 0, 0, 2, 3, 4, 5, 7, 8, 9, 3, 4, 6, 1, 9, 6, 78, 12, 98, 10, 1, 2, 3, 4, 5];

arr = [...new Set(arr)];

let res = [0, 0, 0];

for (let i = 0; i < arr.length; i++) {
	if (arr[i] > res[2]) {
		res.shift();
		res.push(arr[i]);
	} else if (arr[i] > res[1] && arr[i] < res[2]) {
		res.shift();
		res[2] = res[1];
		res[1] = arr[i];
	} else if (arr[i] > res[0] && arr[i] < res[1]) {
		res.shift();
		res.unshift(arr[i]);
	}
}

console.log(res);