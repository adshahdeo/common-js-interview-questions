const binSearch = (arr, key) => {
	let low = arr[0];
	let high  = arr[arr.length - 1];

	while (low < high) {
		const mid = parseInt((low + high)/2);
		if (key === arr[mid]) return mid;
		if (key < arr[mid]) high = mid;
		else low = mid;
	}

	return -1;
}