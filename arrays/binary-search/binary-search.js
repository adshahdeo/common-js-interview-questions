const bSearch = (arr, low, high, key) => {

	if (low > high) return -1;
	
	const mid = parseInt((low + high)/2);
	if (key === arr[mid]) return mid;
	else if (key < arr[mid]) return bSearch(arr, low, mid-1, key);
	else return bSearch(arr, mid+1, high, key);
}

const arr = [1,2,3,4,5,6,7,8,9];
console.log(bSearch(arr, 0, arr.length-1, 4));